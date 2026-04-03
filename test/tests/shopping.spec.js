// playwritghtTests/shopping.spec.js

import { test, expect } from '../utils/testHooks';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/CartPage';

test.describe('User purchase flow', async() => {

    test('complete purchase flow @smoke', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.isLoaded();

        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        expect(await inventoryPage.getCartCount()).toBe('1');

        await inventoryPage.goToCart();
        expect(await cartPage.isItemInCart('Sauce Labs Backpack')).toBeTruthy();

        await cartPage.goToCheckout();

        await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
        await checkoutPage.finishCheckout();

        expect(await checkoutPage.isCheckoutComplete()).toBeTruthy();
    });

})



