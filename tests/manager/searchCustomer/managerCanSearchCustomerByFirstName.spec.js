import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { CustomersListPage} from '../../../src/pages/manager/CustomersListPage'

let firstName;
let lastName;
let postalCode;

test.beforeEach(async ({ page }) => {
  const addCustomer = new AddCustomerPage(page);

  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postalCode = faker.location.zipCode();

   await addCustomer.open();
    await addCustomer.fillFirstName(firstName);
    await addCustomer.fillLastName(lastName);
    await addCustomer.fillPostCode(postalCode);
    await addCustomer.clickAddCustomer();
  /* 
  Pre-conditions:
  1. Open Add Customer page.
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  */
  
});

test('Assert manager can search customer by First Name', async ({ page }) => {
  const customersList = new CustomersListPage(page);

  await customersList.open();
  await customersList.fillSearchField(firstName);
  await customersList.assertOnlyOneRowWithCustomerData(firstName, lastName, postalCode);

  /* 
  Test:
  1. Open Customers page.
  2. Fill the firstName to the search field
  3. Assert customer row is present in the table. 
  4. Assert no other rows is present in the table.
  */
});
