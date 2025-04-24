import { expect, test } from '@playwright/test';

test.describe('Should render the home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Should render the header', async ({ page }) => {
    const header = page.locator('[data-testid="header"]');
    await expect(header).toBeVisible();
    await expect(header).toHaveCount(1);

    const logo = header.locator('[data-testid="logo"]');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveCount(1);

    const menu = header.getByRole('navigation');
    await expect(menu).toBeVisible();
    await expect(menu).toHaveCount(1);
  });

  test('Should render the image with text blocks', async ({ page }) => {
    const blocks = await page.locator('[data-testid="image-with-text-block"]');
    await expect(blocks).toHaveCount(3);

    for (let i = 0; i < 3; i++) {
      const block = blocks.nth(i);
      const title = block.locator('[data-testid="image-with-text-title"]');
      const image = block.locator('[data-testid="image-with-text-image"]');
      const cta = block.locator('[data-testid="image-with-text-cta-link"]');

      if (await title.count()) {
        await expect(title).toBeVisible();
        await expect(title).not.toHaveText('');
      }

      await expect(image).toBeVisible();
      await expect(cta).toBeVisible();
    }
  });

  test('Should render the image with text CTA links', async ({ page }) => {
    const ctas = page.locator('[data-testid="image-with-text-cta-link"]');

    await expect(ctas).toHaveCount(3);

    const expectedHrefs = ['/sobre-o-projeto', 'apadrinhe', 'colabore'];

    for (let i = 0; i < 3; i++) {
      const href = await ctas.nth(i).getAttribute('href');
      expect(href).toContain(expectedHrefs[i]);
    }
  });

  test('Should render the footer', async ({ page }) => {
    const footer = page.locator('[data-testid="footer"]');
    await expect(footer).toBeVisible();
    await expect(footer).toHaveCount(1);

    const logo = footer.locator('[data-testid="footer-social"]');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveCount(1);

    const menu = page.locator('[data-testid="footer-menu"]');
    await expect(menu).toBeVisible();
    await expect(menu).toHaveCount(1);

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
  });
});
