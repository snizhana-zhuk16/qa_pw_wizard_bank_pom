const { expect } = require('@playwright/test');

export class BankLoginPage {
  constructor(page) {
    this.page = page; 
  }

  async open() {
    await this.page.open('/login');
  }
}