const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

// Example from cucumber.js docs

Given('a variable set to {int}', function (number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function (number) {
  this.incrementBy(number);
});

Then('the variable should contain {int}', function (number) {
  expect(this.variable).equals(number);
});

// Test to make sure browser automation is configured properly

When('I visit {string}', async function (url) {
  await this.page.goto(url);
});

Then('I see a {string} image', async function (imageId) {
  const logo = await this.page.$(`img[data-test-id='${imageId}']`);
  expect(logo).to.exist;
});

Then('capture a screenshot named {string}', async function (filename) {
  await this.page.screenshot({ path: filename });
});
