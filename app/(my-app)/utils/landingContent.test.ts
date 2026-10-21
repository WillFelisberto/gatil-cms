import {
  footerDefaults,
  landingDefaults,
  navigationDefaults,
  resolveLabelGroup,
  resolveLandingContent
} from '@/lib/landingContent';

describe('editorial da landing no Payload', () => {
  it('carrega os textos publicados no painel sem precisar alterar o JSX', () => {
    const content = resolveLandingContent({
      catalog: { title: 'Encontre seu companheiro', sponsorButton: 'Quero apadrinhar!' },
      donationBanner: { description: 'Ajude com as despesas veterinárias do mês.' }
    });
    expect(content.catalog.title).toBe('Encontre seu companheiro');
    expect(content.catalog.sponsorButton).toBe('Quero apadrinhar!');
    expect(content.donationBanner.description).toContain('despesas veterinárias');
    expect(content.adoption.description).toBe(landingDefaults.adoption.description);
  });

  it('preserva o hero antigo quando a nova área editorial ainda não foi preenchida', () => {
    const content = resolveLandingContent({
      layout: [
        { blockType: 'hero', title: 'Texto já publicado no CMS', subtitle: 'Descrição anterior' }
      ]
    });
    expect(content.hero.title).toBe('Texto já publicado no CMS');
    expect(content.hero.subtitle).toBe('Descrição anterior');
  });

  it('usa o texto novo quando existe e respeita campos explicitamente vazios', () => {
    const content = resolveLandingContent({
      hero: { title: 'Novo título', subtitle: '' },
      layout: [{ blockType: 'hero', title: 'Título legado', subtitle: 'Subtítulo legado' }]
    });
    expect(content.hero.title).toBe('Novo título');
    expect(content.hero.subtitle).toBe('');
  });

  it('permite administrar o menu e rodapé no mesmo painel', () => {
    expect(resolveLabelGroup(navigationDefaults, { cats: 'Conheça os gatos' }).cats).toBe(
      'Conheça os gatos'
    );
    expect(
      resolveLabelGroup(footerDefaults, { contactTitle: 'Entre em contato' }).contactTitle
    ).toBe('Entre em contato');
  });
});
