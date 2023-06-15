import { expect, Locator, Page } from '@playwright/test';
import { MIN_VALUE, MAX_VALUE } from '../../helpers/Constants'

const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CalculatorPage {
    readonly page: Page;
    readonly inputTextbox: Locator;
    readonly btnSubmit: Locator;
    readonly resultMessage: Locator;

    constructor(page:Page) {
        this.page = page;
        this.inputTextbox = page.getByTestId('number')
        this.btnSubmit = page.getByTestId('getFactorial')
        this.resultMessage = page.getByTestId('resultDiv')
    }

    
   
    public async calcRange () {
        let testRange = Array.from(Array(MAX_VALUE - MIN_VALUE + 1).keys()).map(x => x + MIN_VALUE);
        for (const num of testRange ){
            await this.inputTextbox.fill(num.toString())
            await this.btnSubmit.click();
            let fact:number = parseInt(factorial(num).toString())
            await expect(this.resultMessage).toContainText(fact.toString())
        }
    }

}
