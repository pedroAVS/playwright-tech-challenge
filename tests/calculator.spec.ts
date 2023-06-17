import { test, expect } from '@playwright/test';
import { BASE_URL } from './utils/helpers/Constants';
import { calculateFactorialRange } from '../tests/utils/calculatorUtils';
import { testValues } from '../tests/utils/testValuesUtils';
import { testApiValues } from '../tests/utils/testApiUtils'

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test.describe('Factorial calculator', () => {

  test('Should calculate correctly from 10 to 100', async ({ page }) => {
    const [resultsUiArr, resultsApiArr] = await testValues(page);
    for (let i = 0; i < resultsUiArr.length; i++) {
      const resultUi = resultsUiArr[i];
      const resultApi = resultsApiArr[i];
  
      console.log(`UI Result: ${resultUi}`);
      console.log(`API Result: ${resultApi}`);
  
      expect(resultUi).toContain(resultApi.toString());
    }
  });

  test('Api response is correct', async ({page}) => {
    const matchResultsArr = calculateFactorialRange();
    const resultsApiArr = await testApiValues();
    for (let num in resultsApiArr) {
      const resultApi = resultsApiArr[num]
      const matchResult = matchResultsArr[num]
      console.log(`API Result: ${resultApi}`);
      console.log(`Internal Result: ${matchResult}`);
  
      expect(resultApi).toEqual(matchResult);
    }
  })

  test('UI response is correct', async ({page}) => {
    const [resultsUiArr] = await testValues(page);
    const matchResultsArr = calculateFactorialRange()
    for (let num in matchResultsArr) {
      const resultUi = resultsUiArr[num];
      const matchResult = matchResultsArr[num];
  
      console.log(`UI Result: ${resultUi}`);
      console.log(`API Result: ${matchResult}`);
  
      expect(resultUi).toContain(matchResult.toString());
    }
  })
  
})