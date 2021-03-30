const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
// const puppeteer = require('puppeteer');

// Example from cucumber.js docs

Given('a variable set to {int}', function (number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function (number) {
  this.incrementBy(number);
});

Then('the variable should contain {int}', function (number) {
  assert.equal(this.variable, number);
});

// ----

Given("I'm using a browser", async function () {
  if (this.page != null) {
    await this.page.goto('http://localhost:3000/');
    await this.page.screenshot({ path: 'localhost.png' });
  }
  assert.equal(true, true);
});
