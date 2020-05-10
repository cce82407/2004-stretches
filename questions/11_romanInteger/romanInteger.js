//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  if (num < 1 || num > 3999){
    throw Error
  }
  romanNums = {
    '1':'I',
    '5':'V',
    '10':'X',
    '50':'L',
    '100':'C',
    '500':'D',
    '1000':'M',
  }

  const digits = num.toString().split('').reverse().map((x,i) => {
    //debugger
    for (let j = -1; j < i; j++){
        return x*Math.pow(10,i).toString()
  }})
  .reverse().map(x => romanNums[x]).toString()

  console.log(digits)
  return digits
}
  
  
  
  //const digits = (1253).toString().split('')
  //console.log(digits)

  //YOUR CODE HERE

module.exports = { romanInteger };
