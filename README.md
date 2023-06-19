
# Playwright Tech Challenge

This is a project for the Factorial Calculator Tech Challenge. 

> **Warning**
> This project was build with NodeJS v20.2.0

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/pedroAVS/playwright-tech-challenge.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Quick start

To install the dependencies, execute the tests and see the report execute the script:

  ```
  sh test.sh
  ```

note: make sure that the file has the correct permissions (chomd +x test.sh)

## Running the Tests locally

To run the tests, use the following command:

```bash
npm test
```

The tests will execute and generate a report with the test results.

## Running the Tests on GitActions

Currently the tests will execute on push and pull requests to the Main repository.
Report artifacts are made available, as well as an Allure report served on a github page (check the latest pages-build-deployment for the link of the page).

## Test Configuration

The test configuration can be found in the `playwright.config.ts` file. Modify this file to customize the test settings, such as browser type, test timeout, and test retries.

## File Structure

The project follows the following file structure:

```
playwright-tech-challenge/
├── Documentation
│   ├── Exercise 1
│   │   └── Evidences    
│   └── Exercise 2
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tests/
│   ├── pageobjects
│   │   └── apiResponse.model.ts
│   ├── utils
│   │   └── helpers
│   │   └── calculatorUtils.ts
│   │   └── networkUtils.ts
│   │   └── testApiUtils.ts
│   │   └── testValuesUtils.ts
│   ├── calculator.spec.ts/
└── tsconfig.json
```

- `Documentation`: Contains the reports and acceptance criteria asked for this challenge in a markdown language format.
- `package.json` and `package-lock.json`: Define the project dependencies and scripts.
- `playwright.config.ts`: Configuration file for Playwright.
- `tests/`: Contains the source code for the tests.
  - `pageobjects/`: contains the calculator class file used in the tests
    - `calculator.page.ts`: Object repository for storing all web elements and operations on the calculator page
  - `utils/`: Contains multiple functions that aids on tests execution while keeping the code easy to maintain and to scale up
    - `helpers`: Helper functions containing the constants, creating the range of numbers to test, and a factorial converter
  - `calculator.spec.ts`: Contains the main test scripts.
- `tsconfig.json`: TypeScript configuration file.


## License

This project is licensed under the [MIT License](LICENSE).
