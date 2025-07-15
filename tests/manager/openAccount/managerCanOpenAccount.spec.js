import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';
import { CustomersListPage} from '../../../src/pages/manager/CustomersListPage'
let firstName;
let lastName;
let postCode;

test.beforeEach(async ({ page }) => {
  const addCustomer = new AddCustomerPage(page);

    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    postCode = faker.location.zipCode();
  
  
    await addCustomer.open();
    await addCustomer.fillFirstName(firstName);
    await addCustomer.fillLastName(lastName);
    await addCustomer.fillPostCode(postCode);
    await addCustomer.clickAddCustomer();
    await addCustomer.reload();
  /* 
  Pre-conditions:
  1. Open Add Customer page
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  6. Reload the page (This is a simplified step to close the popup).
  */
});

test('Assert manager can add new customer', async ({ page }) => {
  const openAccount = new OpenAccountPage(page);
  const addCustomer = new AddCustomerPage(page);
  const customersList = new CustomersListPage(page);


  await addCustomer.clickOpenAccount();
  await openAccount.selectCustomer(firstName + ' ' + lastName);
  await openAccount.selectCurrency('Dollar');
  await openAccount.clickProcessButton();
  await page.reload();
  await addCustomer.clickCustomers();
  await customersList.assertAccountNumberIsNotEmptyInLastRow();



  /* 
  Test:
  1. Click [Open Account].
  2. Select Customer name you just created.
  3. Select currency.
  4. Click [Process].
  5. Reload the page (This is a simplified step to close the popup).
  6. Click [Customers].
  7. Assert the customer row has the account number not empty.

  Tips:
  1. Do not rely on the customer row id for the step 13. 
    Use the ".last()" locator to get the last row.
  */
});
