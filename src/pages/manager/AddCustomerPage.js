const { expect } = require('@playwright/test');

export class AddCustomerPage {
  constructor(page) {
    this.page = page; 
  }

  async open() {
    await this.page.open('/manager/addCust');
  }
}