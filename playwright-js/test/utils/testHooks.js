// hooks/testHooks.js
import { test as base, expect } from '@playwright/test';

export const test = base.extend({});
export {expect};

// Runs after each test
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    // Test failed → capture screenshot manually
    const screenshotPath = `./artifacts/${testInfo.title.replace(/\s+/g, '_')}.png`;

    await page.screenshot({ path: screenshotPath, fullPage: true });

    // Attach to Playwright report
    await testInfo.attach('screenshot', {
      path: screenshotPath,
      contentType: 'image/png',
    });
  }
});