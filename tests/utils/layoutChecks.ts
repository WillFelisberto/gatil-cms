import { expect, Page } from '@playwright/test';

export async function checkHeader(page: Page) {
  const header = page.locator('[data-testid="header"]');
  await expect(header).toBeVisible();

  const logo = header.locator('[data-testid="logo"]');
  await expect(logo).toBeVisible();

  const menu = header.getByRole('navigation');
  await expect(menu).toBeVisible();
}

export async function checkFooter(page: Page) {
  const footer = page.locator('[data-testid="footer"]');
  await expect(footer).toBeVisible();

  const logo = footer.locator('[data-testid="footer-social"]');
  await expect(logo).toBeVisible();

  const menu = page.locator('[data-testid="footer-menu"]');
  await expect(menu).toBeVisible();

  const items = await menu.locator('ul > li > a').all();

  const expectedLinks = [
    { href: '/', text: 'Início' },
    { href: '/apadrinhe', text: 'Apadrinhe' },
    { href: '/colabore', text: 'Colabore' },
    { href: '/contate-nos', text: 'Contato' },
    { href: '/sobre-o-projeto', text: 'Sobre o Projeto' },
    { href: '/adote', text: 'Adote' }
  ];

  for (let i = 0; i < expectedLinks.length; i++) {
    await expect(items[i]).toHaveAttribute('href', expectedLinks[i].href);
    await expect(items[i]).toHaveText(expectedLinks[i].text);
  }
}
