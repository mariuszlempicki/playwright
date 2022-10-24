import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get started').click();
  await expect(page).toHaveTitle(/Installation/);
  console.log(await page.video().path());
  await page.video().saveAs('../videos/');

  console.log(await page.video().path());
  await page.close();
});
