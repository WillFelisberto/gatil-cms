import { expect, test } from '@playwright/test';

import { checkFooter, checkHeader } from '../utils/layoutChecks';

test.describe('Should render the about page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sobre-o-projeto');
  });

  test('Should render the layout', async ({ page }) => {
    await checkHeader(page);
    await checkFooter(page);
  });

  test('Should render the title and image', async ({ page }) => {
    const title = page.locator('#sobre-gatil');
    await expect(title).toBeVisible();

    const image = page.locator('img[alt="Imagem 1"]');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('src', /\/_next\/image\?url=/);
  });

  test('Should render the rich text content with paragraphs and strong tags', async ({ page }) => {
    const richText = page.locator('.payload-richtext');
    await expect(richText).toBeVisible();
  });

  test('Should render the volunteers section and cards', async ({ page }) => {
    const section = page.locator('section[aria-labelledby="voluntarios"]');
    await expect(section).toBeVisible();

    const title = page.locator('#voluntarios');
    await expect(title).toBeVisible();

    const cards = section.locator('[data-testid="volunteer-card"]');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);

      const img = card.locator('img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('alt', /Foto de/i);

      const name = card.locator('h3');
      await expect(name).toBeVisible();
      const nameText = await name.textContent();
      expect(nameText?.length).toBeGreaterThan(2);
    }
  });
});
