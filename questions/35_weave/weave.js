// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...args) => {
console.log(...args)
console.log(args.length)
  const is = args.some(element => !Array.isArray(element))
  console.log(is)
  if (!is) {
    throw Error
  }
}
  //return null
  //for(let j = 0; j)


  //enter code here
;

module.exports = { weave };
