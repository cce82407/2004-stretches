const fizzBuzz = (num) => {
  if(typeof num !== 'number' || num < 1){
    throw Error
  }
  const finalArr = []
  for (let i = 1; i <= num; i++){
    if (i%3 === 0){
      finalArr.push('Fizz')
    }
    if (i%5 === 0){
      finalArr.push('Fizz')
    }
    if (i%15 === 0){
      finalArr.push('FizzBuzz')
    }
    else finalArr.push(i)
  }
  return finalArr

  //YOUR CODE HERE
};

console.log(fizzBuzz(15))
module.exports = { fizzBuzz };
