import { expect, test } from '@playwright/test';

import { checkFooter, checkHeader } from '../utils/layoutChecks';

test.describe('Should render the home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Should render the layout', async ({ page }) => {
    await checkHeader(page);
    await checkFooter(page);
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
});
