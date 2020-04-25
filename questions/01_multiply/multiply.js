// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    throw Error
    }
    return num1*num2

};

console.log(multiply ('@','_'))
module.exports = { multiply };
