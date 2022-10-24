import { chromium } from "playwright";
test('basic test', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: "./videos/",
      size: {
        width: 800,
        height: 600
      }
    }
  });

  // Open new page
  const page = await context.newPage();
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get started').click();
  await expect(page).toHaveTitle(/Installation/);

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});
