# Playwright Handling Different Components

This project is a Playwright + TypeScript test automation setup designed to interact with different UI components and validate behavior across a web app. It includes a Playwright configuration file, sample tests, and test data files for parsing CSV/JSON/XLSX content.

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- CSV / JSON / Excel test data support

## Prerequisites

Before running the project, make sure the following are installed on your machine:

- Node.js 18 or later
- npm (comes with Node.js)
- A supported browser runtime for Playwright

## Clone the Repository

```bash
git clone https://github.com/mvaddiboina/PlaywrightHandlingDifferentComponents.git
cd PlaywrightHandlingDifferentComponents
```

## Install Dependencies

Run the following command from the project root:

```bash
npm install
```

This installs the dependencies listed in `package.json`, including:

- `@playwright/test`
- `typescript`
- `csv-parse`
- `xlsx`

## Install Playwright Browsers

Playwright requires browser binaries to be installed before tests can run.

Use:

```bash
npx playwright install --with-deps
```

If you want to install only Chromium (the browser configured in this project), use:

```bash
npx playwright install chromium
```

## Project Structure

```text
PlaywrightHandlingDifferentComponents/
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── test.spec.ts
├── test_data.csv
├── test_data.json
├── test_data.xlsx
├── booking_post.json
├── tests/
├── testdata/
└── .gitignore
```

## Run the Tests

From the project root, run:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

To open the Playwright HTML report after a run:

```bash
npx playwright show-report
```

## Config Notes

The project uses a Playwright configuration file at `playwright.config.ts`.

Key settings in this repo include:

- test directory: `./tests`
- browser project: `chromium`
- screenshots: only on failure
- video: enabled
- traces: retained only for failed tests

## Useful Commands

```bash
# install dependencies
npm install

# install browser binaries
npx playwright install

# run all tests
npx playwright test

# run in headed mode
npx playwright test --headed

# generate/update playwright snapshots or test assets if added later
npx playwright install-deps
```

## Troubleshooting

### Browser is missing

If you see an error that the browser executable is not found, run:

```bash
npx playwright install
```

### Dependencies are not installed

If Node modules are missing, run:

```bash
npm install
```

### Test file not found

Make sure your test files are placed under the `tests/` folder, which is the default directory configured in `playwright.config.ts`.

## Notes

This repository appears to be a learning/demo Playwright project focused on handling different components and reading data from various file formats in automation scenarios. It is intended to be used with TypeScript-based Playwright tests.

If you want, I can also add a more detailed `README` section for test execution examples and custom selectors based on the current test structure.
