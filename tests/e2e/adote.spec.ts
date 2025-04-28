import { expect, test } from '@playwright/test';

import { checkFooter, checkHeader } from '../utils/layoutChecks';

test.describe('Should render the adoption page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/adote');
  });

  test('Should render the layout', async ({ page }) => {
    await checkHeader(page);
    await checkFooter(page);
  });

  test('Should render all the titles', async ({ page }) => {
    const titles = page.locator('[data-testid="title-block"]').all();
    for (const title of await titles) {
      await expect(title).toBeVisible();
    }
  });

  test('Should render the rich text', async ({ page }) => {
    const richText = page.locator('.payload-richtext');
    await expect(richText).toBeVisible();
  });
  test('Should render the cats section and first cat card with details', async ({ page }) => {
    const section = page.locator('section[aria-labelledby="gatinhos-disponiveis"]');
    await expect(section).toBeVisible();

    const cards = section.locator('[data-testid^="cat-card-"]');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    const firstCard = cards.first();

    const image = firstCard.locator('[data-testid="cat-image"]');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('alt', /Foto de/);

    const name = firstCard.locator('[data-testid="cat-name"]');
    await expect(name).toBeVisible();
    const nameText = await name.textContent();
    expect(nameText?.length).toBeGreaterThan(3);

    const badge = firstCard.locator('[data-testid="contact-badge"]');
    await expect(badge).toBeVisible();
    await expect(badge).toContainText(/clique aqui/i);

    const link = firstCard.locator('a');
    const href = await link.getAttribute('href');
    expect(href).toBeTruthy();

    const [popup] = await Promise.all([page.waitForEvent('popup'), link.click()]);
    expect(popup.url()).toMatch(/^https:\/\/api\.whatsapp\.com\/send\/?\?/);
    await popup.close();
  });
});
