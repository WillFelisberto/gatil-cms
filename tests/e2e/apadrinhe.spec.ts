import { expect, test } from '@playwright/test';

import { checkFooter, checkHeader } from '../utils/layoutChecks';

test.describe('Should render the home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/apadrinhe');
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

  test('Should render the text', async ({ page }) => {
    const richText = page.locator('.payload-richtext');
    await expect(richText).toBeVisible();
  });

  test('Should render a cat to sponsor', async ({ page }) => {
    const catCard = page.locator('[data-testid^="cat-card-"]');

    const count = await catCard.count();
    for (let i = 0; i < count; i++) {
      await expect(catCard.nth(i)).toBeVisible();
    }
  });
});
