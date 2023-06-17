import { expect, Locator, Page } from '@playwright/test';
import { range } from '../../helpers/Range';
import { factorial } from '../../helpers/FactorialConverter';
import { FACT_TEST_VALUE } from '../../helpers/Constants';

export class CalculatorPage {
  private readonly page: Page;
  private readonly inputTextbox: Locator;
  private readonly buttonSubmit: Locator;
  private readonly result: Locator;
  private readonly testRange: number[];

  constructor(page: Page) {
    this.page = page;
    this.inputTextbox = page.getByTestId('number');
    this.buttonSubmit = page.getByTestId('getFactorial');
    this.result = page.getByTestId('resultDiv');
    this.testRange = range();
  }

  private get inputTextBox(): Locator {
    return this.inputTextbox;
  }

  private get submitButton(): Locator {
    return this.buttonSubmit;
  }

  private get resultText(): Locator {
    return this.result;
  }

  public async enterNumber(value: number): Promise<void> {
    await this.inputTextBox.fill(value.toString());
  }

  public async clearInput(): Promise<void> {
    await this.inputTextBox.fill('');
  }

  public async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  public async getResult(): Promise<string | null> {
    return await this.resultText.textContent();
  }

  public async verifyResultMessage(value: number): Promise<void> {
    await expect(this.resultText).toContainText(value.toString());
  }

  public async calculateFactorialRange(): Promise<number[]> {
    const factorialArr: number[] = [];
    for (const num of this.testRange) {
      let fact: number;
      if (num < 29) {
        fact = parseFloat(factorial(num));
        factorialArr.push(fact);
      } else {
        fact = factorial(num);
        factorialArr.push(fact);
      }
    }
    console.log(factorial(29));
    expect(factorialArr[11]).toBe(FACT_TEST_VALUE);
    console.log(factorialArr[19]);
    return factorialArr;
  }

  public async testValues(): Promise<[any[], any []]> {
    const resultsUiArr: any[] = [];
    const resultsApiArr: any[] = [];
    for (const num of this.testRange) {
      await this.clearInput();
      await this.enterNumber(num);
      await this.clickSubmit();
      const response = await this.page.waitForResponse('**/factorial');
      const responseBody = await response.json();
      const responseValue = responseBody.answer;
      resultsApiArr.push(responseValue);
      await this.verifyResultMessage(num);
      const item: any = await this.getResult();
      resultsUiArr.push(item);
    }
    return [resultsUiArr, resultsApiArr];
  }

}
