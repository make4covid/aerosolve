@browser
Feature: Use Puppeteer for test automation
  I want to make sure puppeteer is configured properly

  Scenario: Puppeteer can navigate and capture a screenshot
    When I visit "http://localhost:3000"
    Then I see a "react-logo" image
    And capture a screenshot named "app-page.png"
