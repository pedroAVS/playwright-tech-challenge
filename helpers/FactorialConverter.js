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

// const api = math.bignumber("8841761993739701954543616000000");
// console.log(typeof api, api.toString())

// const factorialExpression = "factorial(29)";
// const mat = math.evaluate(factorialExpression);
// console.log(typeof mat, mat.toString())

//console.log(`math.equal(api, mat): ${math.equal(api, mat)}`);

export function factorial(num) {
    const factorialExpression = `factorial(${num})`;
    const mat = math.evaluate(factorialExpression);
    return mat
}

export function convertBigNum(num){
    const api = math.bignumber(num)
    return api
}