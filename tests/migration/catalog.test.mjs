import test from 'node:test';
import assert from 'node:assert/strict';
import { CAT_PAGE_SIZE, normalizeCatalogPage, normalizeCatalogFilter, catalogWhere } from '../../app/(my-app)/utils/catCatalog.ts';

const cats = [
  { id: 1, adotado: false, show: true, disponivelParaApadrinhamento: true },
  { id: 2, adotado: false, show: true, disponivelParaApadrinhamento: false },
  { id: 3, adotado: false, show: false, disponivelParaApadrinhamento: true },
  { id: 4, adotado: true, show: true, disponivelParaApadrinhamento: true },
  { id: 5, adotado: false, show: false, disponivelParaApadrinhamento: false }
];
function matches(cat, exp) {
  if (exp.and) return exp.and.every(e => matches(cat,e));
  if (exp.or) return exp.or.some(e => matches(cat,e));
  return Object.entries(exp).every(([key,predicate]) => cat[key] === predicate.equals);
}
function filtered(filter) { return cats.filter(cat => matches(cat,catalogWhere(filter))).map(c=>c.id); }

test('a união do catálogo exibe cada gato uma única vez', () => {
  assert.equal(CAT_PAGE_SIZE, 12);
  assert.deepEqual(filtered('todos'), [1,2,3]);
  assert.deepEqual(filtered('adocao'), [1,2]);
  assert.deepEqual(filtered('apadrinhamento'), [1,3]);
  assert.equal(new Set(filtered('todos')).size, filtered('todos').length);
});

test('parâmetros de página e filtro inválidos são normalizados', () => {
  assert.equal(normalizeCatalogPage('-2'), 1);
  assert.equal(normalizeCatalogPage('abc'), 1);
  assert.equal(normalizeCatalogPage('2'), 2);
  assert.equal(normalizeCatalogPage('1.5'), 1);
  assert.equal(normalizeCatalogFilter('outro'), 'todos');
});
