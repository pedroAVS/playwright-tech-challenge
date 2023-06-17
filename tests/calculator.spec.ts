import { test, expect } from '@playwright/test';
import { CalculatorPage } from './pageobjects/calculator.page';

test.beforeEach(async ({ page }) => {
  await page.goto('https://qainterview.pythonanywhere.com/');
});

test.describe('Factorial calculator', () => {

  test('Should calculate correctly from 10 to 100', async ({ page }) => {  
    const calc = new CalculatorPage(page);
    const [resultsUiArr, resultsApiArr] = await calc.testValues();
    for (let i = 0; i < resultsUiArr.length; i++) {
      const resultUi = resultsUiArr[i];
      const resultApi = resultsApiArr[i];
  
      console.log(`UI Result: ${resultUi}`);
      console.log(`API Result: ${resultApi}`);
  
      expect(resultUi).toContain(resultApi.toString());
    }
  });

  test('Api response is correct', async () => {
    //TODO: write tests to test directly /factorial endpoint and dismiss UI validations
  })

  test('UI response is correct', async () => {
    //TODO: write tests to test directly /factorial endpoint and dismiss UI validations
  })
  
})