/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CAT_PAGE_SIZE,
  catalogWhere,
  normalizeCatalogFilter,
  normalizeCatalogPage
} from './catCatalog';

function matches(cat: Record<string, boolean>, clause: any): boolean {
  if (clause.and) return clause.and.every((part: any) => matches(cat, part));
  if (clause.or) return clause.or.some((part: any) => matches(cat, part));
  return Object.entries(clause).every(
    ([field, value]) => cat[field] === (value as { equals: boolean }).equals
  );
}

const cases = [
  { nome: 'ambos', adotado: false, show: true, disponivelParaApadrinhamento: true },
  { nome: 'soAdocao', adotado: false, show: true, disponivelParaApadrinhamento: false },
  { nome: 'soApadrinhamento', adotado: false, show: false, disponivelParaApadrinhamento: true },
  { nome: 'adotado', adotado: true, show: true, disponivelParaApadrinhamento: true },
  { nome: 'oculto', adotado: false, show: false, disponivelParaApadrinhamento: false }
];
const list = (filtro: 'todos' | 'adocao' | 'apadrinhamento') =>
  cases.filter((cat) => matches(cat, catalogWhere(filtro))).map((cat) => cat.nome);

describe('catálogo paginado da landing', () => {
  it('lista a união sem duplicar um gato que aceita ambas as ações', () => {
    expect(list('todos')).toEqual(['ambos', 'soAdocao', 'soApadrinhamento']);
  });
  it('respeita as duas flags independentes do Payload', () => {
    expect(list('adocao')).toEqual(['ambos', 'soAdocao']);
    expect(list('apadrinhamento')).toEqual(['ambos', 'soApadrinhamento']);
  });
  it('usa 12 por página e normaliza parâmetros inválidos', () => {
    expect(CAT_PAGE_SIZE).toBe(12);
    expect(normalizeCatalogPage('-2')).toBe(1);
    expect(normalizeCatalogPage('abc')).toBe(1);
    expect(normalizeCatalogPage('2')).toBe(2);
    expect(normalizeCatalogFilter('desconhecido')).toBe('todos');
  });
});
