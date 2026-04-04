# QA Automation Interview Task

## Overview

This repository contains a UI automation solution built to demonstrate:

* Framework design and architecture
* Reliable and maintainable UI automation
* Scalable execution via CI
* Diagnostics and reporting

The solution is implemented using:

* **Playwright (JavaScript)**
* **Selenium (Java + TestNG)** *(in progress)*

The application under test is **SauceDemo (Swag Labs)**:
https://www.saucedemo.com/

---

## Project Structure

```
qa-automation-interview/
├── playwright-js/
├── selenium-java-testng/
├── .github/workflows/
├── README.md
```

---

## Playwright Setup & Execution

### Install dependencies


cd playwright-js
npm install
npx playwright install


### Run tests


npx playwright test


### View report


npx playwright show-report


---

## Test Coverage

### Authentication

* Valid login - verifies navigation to inventory page
* Invalid login - verifies error message
* Invalid login but test fails for capture - verifies failure capture process

### Shopping Flow

* Add item to cart - verify cart state
* Checkout flow - verify successful completion

---

## Architecture & Design

### Pattern Used

* Page Object Model (POM)
* Separation of concerns:

  * `pages/` - UI interactions
  * `tests/` - test logic
  * `utils/` - hooks

### Key Design Decisions

* Playwright locators used for stability
    - Test locators used due to availability, however possible to use more user visable locators
        for a more representative test 
* Centralised test hooks for diagnostics
* Minimal abstraction to maintain readability

---

## Reliability Strategy

* No hard-coded waits (`sleep`)
* Playwright auto-waiting leveraged
* Stable selectors using `data-test`
* Defensive checks for page readiness

---

## Diagnostics & Reporting

On test failure:

* Screenshots captured
* Videos retained
* Playwright traces generated

Custom hooks attach screenshots to reports for improved debugging.

---

## CI Pipeline

A GitHub Actions pipeline is included which:

* Installs dependencies
* Runs smoke tests by default
* Publishes HTML reports
* Uploads failure artifacts (screenshots, traces, videos)

---

## Test Tagging & Selection

* `@smoke` - critical path tests
* Enables fast feedback in CI

---

## Parallel Execution

* Playwright runs tests in parallel by default
* Configurable via `playwright.config.js`

---

## Extending the Framework

To add a new test:

1. Create/update a Page Object in `pages/`
2. Add a test in `tests/`
3. Tag appropriately (`@smoke`, etc.)

---

## Trade-offs & Considerations

* Playwright chosen for modern capabilities (auto-waiting, tracing)
* Selenium included for broader ecosystem compatibility
* Balance maintained between abstraction and readability