import { test, expect } from '@playwright/test';
const config: test = {
  use: {
    video: {
      mode: 'on-first-retry',
      size: { width: 640, height: 480 }
    }
  },
};
export default config;
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get started').click();
  await expect(page).toHaveTitle(/Installation/);
});
