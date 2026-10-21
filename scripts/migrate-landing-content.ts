/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/**
 * Executar APÓS `npm run migrate`:
 *   npx payload run scripts/migrate-landing-content.ts            (prévia)
 *   npx payload run scripts/migrate-landing-content.ts -- --apply (gravar)
 *
 * Reexecutável, não destrutivo: blocos recebem IDs determinísticos; edições
 * posteriores no painel nunca são sobrescritas por uma execução adicional.
 */
import 'dotenv/config';

import config from '@payload-config';
import { getPayload } from 'payload';

import { landingDefaults } from '../lib/landingContent';
import {
  LEGACY_PAGE_SOURCES,
  migrateLegacyLanding,
  shouldWriteMigration
} from '../lib/landingMigration.mjs';

const apply = process.argv.includes('--apply');

async function main() {
  const payload = await getPayload({ config });
  const home = await payload.findGlobal({ slug: 'homepage', depth: 0, overrideAccess: true });
  if (home.legacyMigrationCompleted) {
    console.log(
      'Importação já finalizada anteriormente; não reimportaremos blocos excluídos ou editados.'
    );
    return;
  }
  const pages: Record<string, { layout?: unknown[] }> = {};
  for (const [slug] of LEGACY_PAGE_SOURCES) {
    pages[slug] = await payload.findGlobal({
      slug: slug as 'adote',
      depth: 0,
      overrideAccess: true
    });
  }

  const { data, report } = migrateLegacyLanding(home, pages, landingDefaults);
  const total = Object.values(report.added).reduce((sum, count) => sum + count, 0);
  console.log(
    JSON.stringify({ mode: apply ? 'apply' : 'dry-run', importedBlocks: total, ...report }, null, 2)
  );
  if (!apply) {
    console.log('Prévia concluída. Utilize --apply para gravar os blocos na landing.');
    return;
  }
  if (!shouldWriteMigration(home, data, report)) {
    console.log('Nenhuma alteração necessária. O conteúdo já foi migrado.');
    return;
  }

  // Atualizar APENAS layout e grupos alterados; não sobrescrever SEO, mídia,
  // valores financeiros ou outras edições existentes no painel.
  const changedGroups = ['adoption', 'sponsorship', 'donations', 'contact'].filter(
    (group) =>
      JSON.stringify((home as unknown as Record<string, unknown>)[group]) !==
      JSON.stringify((data as Record<string, unknown>)[group])
  );
  const updated: Record<string, any> = { layout: data.layout, legacyMigrationCompleted: true };
  for (const group of changedGroups) updated[group] = (data as Record<string, unknown>)[group];
  await payload.updateGlobal({ slug: 'homepage', data: updated, overrideAccess: true, depth: 0 });
  console.log('Importação concluída. Confira /admin/globals/homepage > Conteúdos complementares.');
}

main().catch((error) => {
  console.error('[migration:landing] Erro ao migrar conteúdo:', error);
  process.exitCode = 1;
});
