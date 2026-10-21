/** Regras centrais do catálogo da landing, compartilháveis com filtros e testes. */
export type CatalogFilter = 'todos' | 'adocao' | 'apadrinhamento';

export const CAT_PAGE_SIZE = 12;

export function normalizeCatalogFilter(value: string | undefined): CatalogFilter {
  return value === 'adocao' || value === 'apadrinhamento' ? value : 'todos';
}

export function normalizeCatalogPage(value: string | undefined): number {
  const page = Number(value || 1);
  return Number.isSafeInteger(page) && page > 0 ? page : 1;
}

export function catalogWhere(filter: CatalogFilter) {
  const active = { adotado: { equals: false } };
  if (filter === 'adocao') return { and: [active, { show: { equals: true } }] };
  if (filter === 'apadrinhamento')
    return { and: [active, { disponivelParaApadrinhamento: { equals: true } }] };
  return {
    and: [
      active,
      { or: [{ show: { equals: true } }, { disponivelParaApadrinhamento: { equals: true } }] }
    ]
  };
}
