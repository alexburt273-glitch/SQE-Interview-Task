// playwritghtTests/auth.spec.js
import { test, expect } from '../utils/testHooks';
import { LoginPage } from '../pages/LoginPage';

test.describe('Authentication @smoke', () => {

  test('valid login should navigate to inventory', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('invalid login should show error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid', 'invalid');

    await expect(loginPage.errorMessage).toBeVisible();    
  });

  // test('invalid login should show error but fail for capture', async ({page}) => {
  //   const loginPage = new LoginPage(page);

  //   await loginPage.goto();
  //   await loginPage.login('standard_user', 'secret_sauce');

  //   await expect(loginPage.errorMessage).toBeVisible();   

  // })

});