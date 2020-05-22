const moveZeroes = (arr) => {
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      arr.push(0)
      console.log(arr)
    }
  }
  return arr
}

module.exports = { moveZeroes };

//console.log(moveZeroes([1, 2, 0, 3, 0]))

