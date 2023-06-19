import { range } from './helpers/Range';
import { factorial } from './helpers/FactorialConverter';

// Calculates the factorial of numbers within a specified range and returns an array of results.
export function calculateFactorialRange(): number[] {
  const testRange = range();
  const factorialArr: number[] = [];
  for (const num of testRange) {
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