# Workflow Repository – Full Testing Workflow Setup

This project implements a complete frontend testing workflow including linting, formatting, unit testing, and end-to-end testing.
It was developed as part of a Workflow assignment to demonstrate modern testing and CI/CD practices.

## 🚀 Overview

- This repository showcases a complete workflow setup using:

- ESLint for code linting

- Prettier for code formatting

- Husky + lint-staged for Git pre-commit hooks

- Vitest for unit testing

- Playwright for end-to-end browser testing

- GitHub Actions for continuous integration (CI)

## 🧩 Setup Instructions
### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server

If needed to serve static files locally:
```bash
npm run dev
```

Example: Tailwind CSS is compiled via this command.

If using serve, you can start a local server with:

```bash
npx serve . --listen 3000.
```

## 🧪 Testing
### 🧠 Unit Tests (Vitest)

Run all unit tests:

```bash
npm run test
```

#### Vitest was configured for:

- isActivePath() — verifies correct path matching logic.

- getUserName() — tests local storage retrieval and null handling.

✅ All unit tests passed successfully.

## 🌐 End-to-End Tests (Playwright)

### Run all E2E tests across Chromium, Firefox, and WebKit:

```bash
npx playwright test
```


### View the HTML report:

```bash
npx playwright show-report
```

### E2E tests include:

#### Login flow

- Valid login (redirects or shows logout)

- Invalid password (displays error message)

#### Navigation flow

- Loads venue list on the homepage

- Clicks the first venue

- Verifies that “Venue details” is visible on the details page

✅ All E2E tests passed successfully across all browsers.

## 🧱 Test Files
### File	Description

- `tests/e2e/login.spec.js` - Tests login success and error behavior
- `tests/e2e/navigation.spec.js` - Tests homepage navigation and venue details page
- `js/utils/isActivePath.test.js` - Unit test for URL path handling
- `js/utils/getUserName.test.js` - Unit test for user data retrieval
   

## 🧰 Tools & Configuration
### ESLint + Prettier

- ESLint ensures consistent and error-free JavaScript.

- Prettier formats code on commit.

- Configured via lint-staged and Husky pre-commit hook.

#### Pre-commit checks:
```bash 
"lint-staged": {
  "*.js": ["prettier --write", "eslint --fix"],
  "*.html": ["prettier --write"]
}
```

### Husky (Git Hooks)
#### Husky is set up to run linting and formatting before every commit:
```bash
npx husky install
```
Ensures clean, linted, formatted code before pushing.

### Environment Variables

#### Create a .env file in the project root:
```bash
TEST_USER_EMAIL=<your_test_email>
TEST_USER_PASSWORD=<your_test_password>
```
⚠️ These are used by Playwright tests for login and must not be committed.
In CI, they are provided via GitHub Secrets.


## Workflow file:
```bash
.github/workflows/playwright.yml
```

### This workflow:

1. Installs dependencies
2. Installs Playwright browsers
3. Runs tests
4. Uploads Playwright report as an artifact

#### When all tests pass, PRs display a ✅ “All checks have passed” status.

## 📂 Scripts Summary
### Command	Description
- `npm install` - Install dependencies
- `npm run dev` - Run local development server
- `npm run test` - Run all Vitest unit tests
- `npx playwright test` - Run Playwright E2E tests
- `npx playwright show-report` - Open Playwright HTML report
        
	

## 👩‍💻 Author

Toubha Ahmed
