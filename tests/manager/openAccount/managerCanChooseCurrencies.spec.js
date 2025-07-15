import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage'

test('Assert manager can choose currencies for account', async ({ page }) => {
  const openAccount = new OpenAccountPage(page);

  await openAccount.open();
  await openAccount.selectCurrency('Dollar');
  await openAccount.assertSelectedCurrencyIs('Dollar');
  await openAccount.selectCurrency('Pound');
  await openAccount.assertSelectedCurrencyIs('Pound');
  await openAccount.selectCurrency('Rupee');
  await openAccount.assertSelectedCurrencyIs('Rupee');


  /* 
  Test:
  1. Open the Open account page 
    https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/openAccount
  2. Select currency Dollar
  3. Assert the drop-dwon has value Dollar
  4. Select currency Pound
  5. Assert the drop-dwon has value Pound
  6. Select currency Rupee
  7. Assert the drop-dwon has value Rupee
  */
});
