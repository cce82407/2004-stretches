// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  let finalObj = obj
  for(let key in obj){
    if (obj[key] === undefined || obj[key] === null){
      delete obj[key]
    } 
    else finalObj[key] = obj[key]
  }
  console.log(finalObj)
  return finalObj 
  // YOUR CODE
};

module.exports = { trim };
