/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = () => {
  let midNum = Math.floor(arguments.length/2)
  console.log(arguments)
  let arr = [...arguments]
  if (arr.length%2){
    if (arr.slice(0,midNum) === arr.slice(midNum + 1).reverse){
      return true
    }
  if(!arr.length%2){
    if (arr.slice(0,midNum) === arr.slice(midNum).reverse){
      return true
    }
  }
    return false

  }

  //YOUR CODE
};

module.exports = { validPalindrome };
