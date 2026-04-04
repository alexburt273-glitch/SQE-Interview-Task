// CartPage.js

export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async getCartItems() {
    return await this.cartItems.allTextContents();
  }

  async isItemInCart(itemName) {
    const item = this.page.locator('.cart_item', {
      has: this.page.locator('.inventory_item_name', { hasText: itemName }),
    });

    return await item.isVisible();
  }

  async removeItem(itemName) {
    const item = this.page.locator('.cart_item', {
      has: this.page.locator('.inventory_item_name', { hasText: itemName }),
    });

    await item.locator('button').click();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}