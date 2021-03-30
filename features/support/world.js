// Example constructor from cucumber.js example project

// For help setting up a "world" in cucumber, see:
// https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md

const { setWorldConstructor, World } = require('@cucumber/cucumber');
const webDriver = require('./webDriver');

class CustomWorld extends World {
  constructor(options) {
    super(options);

    this.driver = webDriver;
    this.variable = 0;
  }

  get page() {
    return this.driver.page;
  }

  get browser() {
    return this.driver.browser;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
