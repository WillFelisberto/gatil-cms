import { expect, test } from '@playwright/test';

import { checkFooter, checkHeader } from '../utils/layoutChecks';

test.describe('Should render the contato page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contate-nos');
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

  test('Should render the text', async ({ page }) => {
    const richText = page.locator('.payload-richtext');
    await expect(richText).toBeVisible();
  });

  test('Should render and toggle all FAQ questions', async ({ page }) => {
    const accordion = page.locator('[data-testid="faq-accordion"]');
    await expect(accordion).toBeVisible();

    const questions = accordion.locator('[data-testid^="faq-question-"]');
    const answers = accordion.locator('[data-testid^="faq-answer-"]');

    const count = await questions.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const question = questions.nth(i);
      const answer = answers.nth(i);

      await expect(question).toBeVisible();

      const styleBefore = await answer.evaluate((el) => getComputedStyle(el).maxHeight);
      expect(styleBefore).toBe('0px');

      await question.click();

      await page.waitForTimeout(350);

      const styleAfter = await answer.evaluate((el) => getComputedStyle(el).maxHeight);
      expect(Number.parseInt(styleAfter)).toBeGreaterThan(0);

      await expect(answer.locator('p')).toBeVisible();
    }
  });
});
