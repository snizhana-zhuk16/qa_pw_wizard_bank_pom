import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNamePlaceholder = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postCodeInput = page.getByPlaceholder('Post Code');
    this.addCustomerButton = page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    this.viewCustomersButton = page.getByRole('button', { name: 'Customers' });
    






  }


  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/addCust',
    );
  }

  async reload() {
    await this.page.reload();
  }
  
  async fillFirstName(text) {
     await this.firstNamePlaceholder.fill(text);
  }

  async fillLastName(text) {
    await this.lastNameInput.fill(text);
  }

  async fillPostCode(text) {
    await this.postCodeInput.fill(text);
  }

  async clickAddCustomer() {
    await this.addCustomerButton.click();
  }

  async clickCustomers() {
    await this.viewCustomersButton.click();
  }


}

