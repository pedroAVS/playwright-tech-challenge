import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { CalculatorPage } from './pageobjects/calculator.page';

test.beforeEach(async ({ page }) => {
  await page.goto('https://qainterview.pythonanywhere.com/');
});

test.describe('Factorial calculator', () => {

  test('Should calculate correctly from 10 to 100', async ({ page }) => {  
    const calc = new CalculatorPage(page);
    await calc.calcRange()

  });
  
})