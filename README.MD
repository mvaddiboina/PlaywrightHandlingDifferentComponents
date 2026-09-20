# Playwright Handling Different Components

A TypeScript-based Playwright test automation project covering common browser-automation scenarios, including UI components, dialogs, frames, multiple windows and popups, file uploads, mouse actions, API testing, data-driven testing, and test annotations.

The project also includes sample CSV, JSON, and XLSX data files. The `xlsx` and `csv-parse` packages are available for data-driven test scenarios.

## Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project structure](#project-structure)
- [Running tests](#running-tests)
- [Running specific scenarios](#running-specific-scenarios)
- [Viewing reports and debugging](#viewing-reports-and-debugging)
- [Configuration](#configuration)
- [Writing a test](#writing-a-test)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Install the following software before starting:

- [Node.js](https://nodejs.org/) 18 or newer
- npm, included with Node.js
- Git

Check your installed versions:

```bash
node --version
npm --version
git --version
```

## Installation

### macOS and Linux

```bash
git clone https://github.com/mvaddiboina/PlaywrightHandlingDifferentComponents.git
cd PlaywrightHandlingDifferentComponents
npm install
npx playwright install
```

On a Linux machine or CI runner, install the browser system dependencies as well:

```bash
npx playwright install --with-deps
```

### Windows PowerShell

```powershell
git clone https://github.com/mvaddiboina/PlaywrightHandlingDifferentComponents.git
Set-Location PlaywrightHandlingDifferentComponents
npm install
npx playwright install
```

`--with-deps` is generally intended for Linux environments. On Windows, `npx playwright install` is normally sufficient; ensure that your operating-system updates and graphics drivers are current if a browser fails to start.

## Project structure

```text
PlaywrightHandlingDifferentComponents/
├── playwright.config.ts       # Playwright Test configuration
├── package.json               # Dependencies and project metadata
├── package-lock.json          # Locked dependency versions
├── tsconfig.json              # TypeScript configuration
├── test.spec.ts               # Root-level sample test
├── tests/                     # Configured Playwright test directory
│   ├── api_testing/
│   ├── codegen/
│   ├── data_driven_testing/
│   ├── file_upload/
│   ├── grouping_tags/
│   ├── handle_alerts/
│   ├── handle_frames/
│   ├── handle_input_check_radion_combox/
│   ├── handle_multiple_popups/
│   ├── handle_multiple_windows/
│   ├── hooks_pw/
│   ├── mouse_actions/
│   ├── table_data/
│   ├── test_annotations/
│   ├── example.spec.ts
│   ├── example_002.test.ts
│   ├── sauce_demo_login.spec.ts
│   └── simple_pw_scripts.ts
├── testdata/                  # Additional test-data directory
├── test_data.csv
├── test_data.json
├── test_data.xlsx
└── booking_post.json
```

The names of some directories reflect the original learning examples in the repository.

## Running tests

Run all tests discovered under `tests/`:

```bash
npx playwright test
```

Run tests in a visible browser window:

```bash
npx playwright test --headed
```

Run tests in a specific browser project:

```bash
npx playwright test --project=chromium
```

Run tests with Playwright's interactive UI mode:

```bash
npx playwright test --ui
```

The repository currently configures the Chromium project. Firefox, WebKit, mobile, Edge, and branded Chrome projects are present as commented examples in `playwright.config.ts` and must be enabled before use.

## Running specific scenarios

Run a particular test file:

```bash
npx playwright test tests/sauce_demo_login.spec.ts
```

Run all tests in a scenario directory:

```bash
npx playwright test tests/handle_alerts
```

Run tests whose title or file path matches a pattern:

```bash
npx playwright test -g "login"
```

Run a test by its line number:

```bash
npx playwright test tests/sauce_demo_login.spec.ts:5
```

### Important: root-level sample test

`playwright.config.ts` sets `testDir` to `./tests`, so Playwright's normal test command does not discover the root-level `test.spec.ts` file. To run it explicitly, use:

```bash
npx playwright test test.spec.ts
```

For consistency with the rest of the project, new Playwright test files should normally be added under `tests/`.

## Viewing reports and debugging

The configured reporter generates an HTML report. Open it after a test run with:

```bash
npx playwright show-report
```

Run with a trace for debugging a scenario:

```bash
npx playwright test tests/sauce_demo_login.spec.ts --trace on
```

Other useful options:

```bash
# Show the list of tests without running them
npx playwright test --list

# Increase detail in the terminal output
npx playwright test --reporter=line

# Open the Playwright Inspector
npx playwright test tests/sauce_demo_login.spec.ts --debug
```

The current configuration captures screenshots only on failure, records video, and retains traces on failure.

## Configuration

The main configuration is in `playwright.config.ts`:

- Test directory: `./tests`
- Browser: Chromium using the Desktop Chrome device profile
- Test timeout: 10 seconds
- Assertion timeout: 3 seconds
- Workers: 1
- Reporter: HTML
- Screenshots: only on failure
- Video: enabled
- Trace: retained on failure

If the application under test runs locally, a `baseURL` and `webServer` can be enabled in the configuration. For example:

```typescript
use: {
  baseURL: 'http://localhost:3000',
},
```

Tests can then navigate using relative paths:

```typescript
await page.goto('/login');
```

## Writing a test

Create a file such as `tests/login.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test('user can open Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/i);
  await expect(page.locator('[data-test="username"]')).toBeVisible();
});
```

Run the new test with:

```bash
npx playwright test tests/login.spec.ts --headed
```

Prefer stable locators such as `getByRole`, `getByLabel`, `getByText`, or dedicated `data-testid` attributes. Avoid relying on fragile CSS or XPath selectors when a semantic locator is available.

## Test data

The repository contains example data in CSV, JSON, and Excel formats:

- `test_data.csv`
- `test_data.json`
- `test_data.xlsx`
- `booking_post.json`

Use `csv-parse` for CSV data and `xlsx` for Excel workbooks. Keep reusable fixtures and input files in `testdata/` where possible, and avoid committing credentials or other sensitive test data.

## Troubleshooting

### Browser executable is missing

Install the Playwright browser binaries:

```bash
npx playwright install
```

On Linux, include operating-system dependencies:

```bash
npx playwright install --with-deps
```

### `npm install` fails

Confirm that Node.js is 18 or newer, then remove the local installation and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows PowerShell, use:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

Only remove `package-lock.json` when you intentionally want npm to regenerate the lock file; otherwise remove `node_modules` and run `npm install`.

### No tests are found

Confirm that the test file is under `tests/` and uses a Playwright-recognized extension such as `.spec.ts` or `.test.ts`. Use `--list` to see what Playwright discovers:

```bash
npx playwright test --list
```

For the root-level sample, run `npx playwright test test.spec.ts` explicitly.

### HTML report is not available

Run the tests first, then open the generated report:

```bash
npx playwright test
npx playwright show-report
```

## Available npm dependencies

The project currently uses:

- `@playwright/test` for browser automation and test execution
- `typescript` for TypeScript support
- `@types/node` for Node.js type definitions
- `csv-parse` for CSV parsing
- `xlsx` for Excel file handling

The project does not currently define npm scripts, so the commands in this guide use `npx playwright` directly.
