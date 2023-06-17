import { expect, Locator, Page } from '@playwright/test';
import { range } from '../utils/helpers/Range';

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

}