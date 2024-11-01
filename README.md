# Playwright: Wizard Bank POM

This project adds test coverage for the Wizard Bank Manager functionality. 

# Test coverage

- Bank manager login
- Adding new customer
- Adding new account for the customer
- Deleting a customer
- Searching a customer information
- Returning to the Home page
- Customer's work with multiple transactions

# How to run the tests

## Install project
```bash
npm i
npx playwright install
```
 ## Run tests in UI mode
```bash
npx playwright test --ui
```
 ## Run tests in Debug mode
```bash
npx playwright test --debug
```
 ## Run tests in headless mode
```bash
npx playwright test
```
 ## Generate report for headless run
```bash
npx playwright show-report
```
