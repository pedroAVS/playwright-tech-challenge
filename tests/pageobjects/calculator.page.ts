import { expect, Locator, Page } from '@playwright/test';
import { range } from '../../helpers/Range';
import { factorial } from '../../helpers/FactorialConverter';
import { FACT_TEST_VALUE, BASE_URL } from '../../helpers/Constants';
import axios from 'axios'
import FormData from 'form-data'

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
        fact = parseFloat(factorial(num));
        factorialArr.push(fact);
      }
    }
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

  public async testApiValues() {
    const numbersRange = this.testRange;
    const results: string[] = [];
    for (const num of this.testRange) {
      const formData = new FormData();
      formData.append('number', num)
      try {
        const response = await axios.post(`${BASE_URL}/factorial`, formData)
        const responseData = response.data;
        const responseValue = responseData.answer
        results.push(responseValue);
      } catch (error) {
        console.error('Error occurred for number ${num}: ', error)
        throw error;
      }
    }
    return results;
  }

}
