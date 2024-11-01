const { expect } = require('@playwright/test');

export class BankManagerMainPage {
  constructor(page) {
    this.page = page; 
  }

  async open() {
    await this.page.open('/manager');
  }
}