import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.lastRow = page.locator('table tbody tr').last();
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

    async assertCustomerDataInLastRow(firstName, lastName, postCode) {
    const cells = this.lastRow.locator('td');
    await expect(cells.nth(0)).toHaveText(firstName);
    await expect(cells.nth(1)).toHaveText(lastName);
    await expect(cells.nth(2)).toHaveText(postCode);
    
  }
  
  async assertNoAccountNumberInLastRow() {
  const accountCell = this.lastRow.locator('td').nth(3);
  await expect(accountCell).toBeEmpty();
  }
}
