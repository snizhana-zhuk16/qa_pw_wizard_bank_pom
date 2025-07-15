import { expect } from '@playwright/test';

export class BankHomePage {
  constructor(page) {
    this.page = page;
    this.customerLoginButton = page.getByRole('button', {
      name: 'Customer Login',
    });

    this.managerLoginButton = page.getByRole('button', {
      name: 'Manager Login',
    });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/login');
  }

  async clickCustomerLoginButton() {
    await this.customerLoginButton.click();
  }

  async clickManagerLoginButton() {
    await this.managerLoginButton.click();
  }
}
