/**
 * Transformação pura da estrutura multi-página antiga para a landing do Payload.
 * Não altera registros de origem, PIX, gatos, adoções ou apadrinhamentos.
 * IDs determinísticos permitem reexecutar a importação sem duplicar blocos.
 */
import { createHash } from 'node:crypto';

export const LEGACY_PAGE_SOURCES = [
  ['adote', 'Adoção'],
  ['apadrinhe', 'Apadrinhamento'],
  ['colabore', 'Colaboração'],
  ['contato', 'Contato']
];

const nestedArrays = ['images', 'faq', 'products', 'slides'];
const sourceTarget = {
  adote: ['adoption', { title: 'title', subtitle: 'description' }],
  apadrinhe: ['sponsorship', { title: 'title', subtitle: 'description', ctaText: 'button' }],
  colabore: ['donations', { title: 'title', subtitle: 'description' }],
  contato: ['contact', { title: 'title', subtitle: 'description', ctaText: 'whatsappButton' }]
};

const stableId = (value) => createHash('sha256').update(value).digest('hex').slice(0, 24);

function copyItems(items, seed) {
  return items.map((value, position) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
    const id = String(value.id ?? position);
    const result = { ...value, id: stableId(`${seed}:${id}`) };
    for (const key of nestedArrays) {
      if (Array.isArray(result[key])) result[key] = copyItems(result[key], `${seed}:${id}:${key}`);
    }
    return result;
  });
}

export function transformLegacyBlock(block, source, label, index) {
  if (!block || typeof block !== 'object' || !block.blockType) return null;
  const sourceId = String(block.id ?? index);
  const id = stableId(`gatil:landing:${source}:${block.blockType}:${sourceId}`);
  const existingName = block.blockName?.trim();
  const result = { ...block, id, blockName: `[Importado: ${label}] ${existingName || block.blockType}` };
  for (const key of nestedArrays) {
    if (Array.isArray(result[key])) result[key] = copyItems(result[key], `${id}:${key}`);
  }
  return result;
}

/**
 * Em páginas antigas o primeiro hero alimentava os textos da seção equivalente.
 * A origem também é copiada na íntegra, mas o hero importado não é exibido duas vezes.
 * Nunca substitui um campo já personalizado pelo editor.
 */
export function migrateLegacyLanding(home, pages, defaults) {
  const next = { ...home };
  const currentBlocks = Array.isArray(home.layout) ? home.layout : [];
  const resultBlocks = [...currentBlocks];
  const ids = new Set(currentBlocks.map(block => block?.id).filter(Boolean));
  const report = { added: {}, existing: {}, copiedFields: [], skippedUnknown: [] };

  for (const [source, label] of LEGACY_PAGE_SOURCES) {
    const blocks = pages[source]?.layout;
    report.added[source] = 0;
    report.existing[source] = 0;
    if (!Array.isArray(blocks)) continue;
    const hero = blocks.find(block => block?.blockType === 'hero');
    const mapping = sourceTarget[source];
    // Se o hero já foi importado, não reprocessar campos mesmo que o editor
    // tenha posteriormente escolhido um texto igual ao default.
    const heroImported = hero && ids.has(transformLegacyBlock(hero, source, label, blocks.indexOf(hero)).id);
    if (hero && mapping && !heroImported) {
      const [target, fields] = mapping;
      next[target] = { ...home[target] };
      for (const [from, to] of Object.entries(fields)) {
        const input = hero[from];
        const current = next[target][to];
        if (typeof input !== 'string' || !input.trim()) continue;
        // Valores personalizados no Payload têm precedência sobre os textos legados.
        if (current !== null && current !== undefined && current !== '' && current !== defaults[target]?.[to]) continue;
        next[target][to] = input;
        report.copiedFields.push(`${source}.${from} -> ${target}.${to}`);
        // O título antigo é completo; não anexar um trecho de destaque fictício.
        if (to === 'title' && 'titleEmphasis' in (defaults[target] || {})) {
          const currentEmphasis = next[target].titleEmphasis;
          if (currentEmphasis == null || currentEmphasis === defaults[target].titleEmphasis) {
            next[target].titleEmphasis = '';
          }
        }
      }
    }
    for (const [index, block] of blocks.entries()) {
      const clone = transformLegacyBlock(block, source, label, index);
      if (!clone) { report.skippedUnknown.push(`${source} #${index}`); continue; }
      if (ids.has(clone.id)) { report.existing[source]++; continue; }
      resultBlocks.push(clone);
      ids.add(clone.id);
      report.added[source]++;
    }
  }
  next.layout = resultBlocks;
  return { data: next, report };
}

export function shouldWriteMigration(original, next, report) {
  return Object.values(report.added).some(n => n > 0) || report.copiedFields.some(field => {
    const [, targetAndField] = field.split(' -> ');
    const [section, key] = targetAndField.split('.');
    return original?.[section]?.[key] !== next?.[section]?.[key];
  });
}
