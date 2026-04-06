// playwright-js/inventory.spec.js

import { test, expect } from '../utils/testHooks';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Inventory Behaviour @smoke', () => {

  test('should sort items by price low to high', async ({page}) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    const pricesBefore = await inventoryPage.getItemPrices();

    await inventoryPage.sortBy('lohi');

    const pricesAfter = await inventoryPage.getItemPrices();

    const sortedPrices = [...pricesAfter].sort((a, b) => a - b);

    expect(pricesAfter).toEqual(sortedPrices);
  });

   test('should update cart when item is added and removed', async ({page}) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    
    await inventoryPage.addItemToCart('Sauce Labs Onesie');
       expect(await inventoryPage.getCartCount()).toBe('1');
   

   
    await inventoryPage.goToCart();

    
    await cartPage.removeItem();


    await expect(cartPage.cartItems).toHaveCount(0);
  });

});