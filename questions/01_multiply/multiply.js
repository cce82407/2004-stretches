// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    throw new Error()
    }
    return num1*num2

};

console.log(multiply (2,2))
//console.log(multiply ('a','b'))

module.exports = { multiply };
