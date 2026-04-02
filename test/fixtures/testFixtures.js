// fixtures/testFixtures.js
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  LoginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});