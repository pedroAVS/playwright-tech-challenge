import { Page } from '@playwright/test';
import { interceptResponseValue } from '../utils/networkUtils';
import { range } from './helpers/Range';
import { CalculatorPage } from '../pageobjects/calculator.page';
import { ENDPOINT } from './helpers/Constants';

export async function testValues(page: Page) {
  const calc = new CalculatorPage(page);
  const testRange = range();
  const resultsUiArr: any[] = [];
  const resultsApiArr: any[] = [];
  for (const num of testRange) {
    await calc.clearInput();
    await calc.enterNumber(num);
    await calc.clickSubmit();
    const responseValue = await interceptResponseValue(page, ENDPOINT);
    resultsApiArr.push(responseValue);
    await calc.verifyResultMessage(num);
    const item: any = await calc.getResult();
    resultsUiArr.push(item);
  }
  return [resultsUiArr, resultsApiArr];
}
