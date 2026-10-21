import { test } from 'node:test';
import assert from 'node:assert/strict';
import { migrateLegacyLanding, shouldWriteMigration } from '../../lib/landingMigration.mjs';

const defaults = {
  adoption: { title: 'Adotar', titleEmphasis: 'com amor', description: 'Texto padrão' },
  sponsorship: { title: 'Apadrinhe', titleEmphasis: 'um amigo', description: 'Texto padrão', button: 'Apadrinhar' },
  donations: { title: 'Doe', titleEmphasis: 'agora', description: 'Texto padrão' },
  contact: { title: 'Contato', titleEmphasis: 'com a gente', description: 'Texto padrão', whatsappButton: 'Conversar' }
};
const pages = {
  adote: { layout: [
    { id: 'hero-1', blockType: 'hero', title: 'Adote um amigo de quatro patas', subtitle: 'Conheça nossa política', ctaText: 'Quero adotar', ctaLink: '/adote' },
    { id: 'faq-1', blockType: 'faq', faq: [{ id: 'faq-a', pergunta: 'É gratuito?', resposta: 'Sim' }] },
    { id: 'gallery-1', blockType: 'gallery', images: [{ id: 'img-1', caption: 'Nosso espaço', image: 7 }] }
  ] },
  apadrinhe: { layout: [{ id: 'sponsor-hero', blockType: 'hero', title: 'Como apadrinhar?', subtitle: 'Ajude um gato', ctaText: 'Apadrinhe' }, { id: 'products-1', blockType: 'products', products: [{ id: 'p-1', name: 'Caneca', price: 25, image: 11, buyLink: 'https://loja.exemplo/caneca' }] },
    { id: 'slider-1', blockType: 'sliderBlock', title: 'Passos para ajudar', content: { root: { children: [] } }, slides: [{ id: 'slide-1', title: 'Primeiro passo', description: 'Fale conosco' }] },
    { id: 'image-text-1', blockType: 'imageWithText', title: 'Ajude-nos', text: 'Cuidado todos os dias', image: 12, ctaText: 'Colabore', ctaLink: '/colabore' } ] },
  colabore: { layout: [{ id: 'donate-hero', blockType: 'hero', title: 'Ajude o gatil', subtitle: 'Você faz a diferença' }, { id: 'rich-1', blockType: 'textBlock', content: { root: { children: [{ type: 'paragraph', children: [{ text: 'Adoção responsável' }] }] } } }] },
  contato: { layout: [{ id: 'contact-hero', blockType: 'hero', title: 'Fale com a gente', subtitle: 'Será um prazer', ctaText: 'Enviar mensagem' }] }
};

test('preserva todos os blocos e mídia/FAQ/produtos/texto rico ao migrar', () => {
  const { data, report } = migrateLegacyLanding({ layout: [{ id: 'home-hero', blockType: 'hero', title: 'Home antiga' }] }, pages, defaults);
  assert.equal(data.layout.length, 11);
  assert.equal(report.added.adote, 3);
  assert.equal(data.adoption.title, 'Adote um amigo de quatro patas');
  assert.equal(data.adoption.titleEmphasis, '');
  assert.equal(data.sponsorship.description, 'Ajude um gato');
  assert.equal(data.donations.description, 'Você faz a diferença');
  assert.equal(data.contact.title, 'Fale com a gente');
  assert.deepEqual(data.layout.find(x => x.blockType === 'faq').faq[0].resposta, 'Sim');
  assert.equal(data.layout.find(x => x.blockType === 'gallery').images[0].image, 7);
  assert.equal(data.layout.find(x => x.blockType === 'products').products[0].image, 11);
  assert.equal(data.layout.find(x => x.blockType === 'sliderBlock').slides[0].title, 'Primeiro passo');
  assert.equal(data.layout.find(x => x.blockType === 'imageWithText').ctaLink, '/colabore');
  assert.ok(data.layout.find(x => x.blockType === 'textBlock').content.root);
  assert.equal(new Set(data.layout.map(x => x.id)).size, data.layout.length);
  assert.ok(shouldWriteMigration({}, data, report));
});

test('reexecutar não duplica itens nem sobrescreve edições editoriais', () => {
  const first = migrateLegacyLanding({ layout: [] }, pages, defaults).data;
  first.adoption.title = 'Título alterado no painel';
  first.adoption.titleEmphasis = 'Personalizado';
  const second = migrateLegacyLanding(first, pages, defaults);
  assert.equal(second.data.layout.length, first.layout.length);
  assert.equal(second.data.adoption.title, 'Título alterado no painel');
  assert.equal(second.data.adoption.titleEmphasis, 'Personalizado');
  assert.ok(Object.values(second.report.added).every(x => x === 0));
  assert.equal(shouldWriteMigration(first, second.data, second.report), false);
});

test('não substitui textos existentes no painel nem mídias por defaults', () => {
  const home = { layout: [], adoption: { title: 'Título meu', titleEmphasis: 'existente', description: 'Meu texto' }, heroImage: 17 };
  const { data } = migrateLegacyLanding(home, pages, defaults);
  assert.equal(data.adoption.title, 'Título meu');
  assert.equal(data.adoption.description, 'Meu texto');
  assert.equal(data.adoption.titleEmphasis, 'existente');
  assert.equal(data.heroImage, 17);
});

test('não grava sem conteúdo e ignora páginas sem layout', () => {
  const home = { layout: [] };
  const { data, report } = migrateLegacyLanding(home, { adote: {}, apadrinhe: {}, colabore: {}, contato: {} }, defaults);
  assert.deepEqual(data.layout, []);
  assert.equal(shouldWriteMigration(home, data, report), false);
});
