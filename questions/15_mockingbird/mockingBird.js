// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  let res = []
  for (let i = 0; i < n; i++){
    let returnValue = func()
    console.log(returnValue)
    res.push(returnValue)
  // YOUR CODE
  };
  return res
}
// see test specs to complete this stretch

module.exports = { repeater };
