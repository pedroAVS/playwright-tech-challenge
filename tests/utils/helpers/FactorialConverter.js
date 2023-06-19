import { create, all } from 'mathjs'

const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'BigNumber',
    precision: 64,
    predictable: false,
    randomSeed: null
}

const math = create(all, config)

// Return the calculated factorial of a given number
export function factorial(num) {
    const factorialExpression = `factorial(${num})`;
    const mat = math.evaluate(factorialExpression);
    return mat
}