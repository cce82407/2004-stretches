const decypher = (str) => {
  let strArr = str.split('')
  const num = [0,1,2,3,4,5,6,7,8,9]
  if (num.inludes(strArr[0])){
    console.log(true)
    return true
  }
  console.log(strArr)
  //for (let )
  //YOUR CODE HERE
};
module.exports = { decypher };
