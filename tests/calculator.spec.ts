import { test, expect } from '@playwright/test';
import { CalculatorPage } from './pageobjects/calculator.page';
import { BASE_URL } from '../helpers/Constants';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
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

  test.only('Api response is correct', async ({page}) => {
    const calc = new CalculatorPage(page);
    const resultsApiArr = await calc.testApiValues();
    const matchResultsArr = await calc.calculateFactorialRange()
    console.log(matchResultsArr)
    for (let num in resultsApiArr) {
      console.log(num)
      const resultApi = resultsApiArr[num]
      const matchResult = matchResultsArr[num]
      console.log(`API Result: ${resultApi}`);
      console.log(`Internal Result: ${matchResult}`);
  
      expect(resultApi).toEqual(matchResult);
    }
  })

  test('UI response is correct', async () => {
    //TODO: write tests to test directly /factorial endpoint and dismiss UI validations
  })
  
})