const puppeteer = require('puppeteer');

class WebDriver {
  driver;
  browser;
  page;

  constructor() {
    this.driver = puppeteer;
  }

  async launchBrowser(headless = true) {
    this.browser = await this.driver.launch({
      headless,
      slowMo: headless ? 0 : 50,
    });
  }

  async closePage() {
    if (this.browser && this.page) {
      const cookies = await this.page.cookies();
      if (cookies && cookies.length > 0) {
        await this.page.deleteCookie(...cookies);
      }
      await this.page.close();
      this.page = null;
    }
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
    this.browser = null;
  }

  async openNewPage() {
    this.page = await this.browser.newPage();
  }
}

module.exports = new WebDriver();
