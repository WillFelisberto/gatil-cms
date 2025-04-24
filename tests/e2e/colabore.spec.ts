import { expect, test } from '@playwright/test';

import { checkFooter, checkHeader } from '../utils/layoutChecks';

test.describe('Should render the colabore page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/colabore');
  });

  test('Should render the layout', async ({ page }) => {
    await checkHeader(page);
    await checkFooter(page);
  });

  test('Should render the title', async ({ page }) => {
    const title = page.locator('[data-testid="title-block"]');
    await expect(title).toBeVisible();
    await expect(title).toHaveCount(1);
  });

  test('Should render all rich texts', async ({ page }) => {
    const richTexts = page.locator('.payload-richtext').all();
    for (const block of await richTexts) {
      await expect(block).toBeVisible();
    }
  });

  test('Should render donation info section with images and figcaptions', async ({ page }) => {
    const section = page.locator(
      'section[aria-label="Informações bancárias e QR Code para doação"]'
    );
    await expect(section).toBeVisible();

    const figures = section.locator('figure');
    await expect(figures).toHaveCount(2);

    for (let i = 0; i < (await figures.count()); i++) {
      const figure = figures.nth(i);
      const img = figure.locator('img');
      const caption = figure.locator('figcaption');

      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('alt', /Imagem/);

      await expect(caption).toBeVisible();
      const text = await caption.textContent();
      expect(text).not.toBeNull();
      expect(text?.length).toBeGreaterThan(5);
    }
  });
});
