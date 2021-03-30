const { After, Before, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const webDriver = require('./webDriver');

BeforeAll(async function () {
  // Set headless to "false" to watch tests execute in browser
  await webDriver.launchBrowser();
});

Before('@browser', async function () {
  await webDriver.openNewPage();
});

After('@browser', async function () {
  await webDriver.closePage();
});

AfterAll(async function () {
  await webDriver.closeBrowser();
});
