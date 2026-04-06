// inventoryPage.js

export class InventoryPage {
   constructor(page) {
    this.page = page;

    this.inventoryContainer = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.itemPrices = page.locator('.inventory_item_price');
  }

  async isLoaded() {
    await this.inventoryContainer.waitFor();
  }

  async addItemToCart(itemName) {
    const item = this.page.locator('.inventory_item', {
      has: this.page.locator('.inventory_item_name', { hasText: itemName }),
    });

    await item.locator('button').click();
  }

  async removeItemFromCart(itemName) {
    const item = this.page.locator('.inventory_item', {
      has: this.page.locator('.inventory_item_name', { hasText: itemName }),
    });

    await item.locator('button').click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async goToCart() {
    await this.cartLink.click();
  }


  async sortBy(optionValue) {
    await this.sortDropdown.selectOption(optionValue);

  }

  async getItemPrices() {
    const prices = await this.itemPrices.allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }
}