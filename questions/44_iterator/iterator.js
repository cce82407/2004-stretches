// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  constructor(arr){
    if(!Array.isArray(arr)){
      throw Error
    }
    this.arr = arr
    this.num = 0
  }
  next(){
    const returnVal = {
      done:false,
      value:''
    }
    if (this.num <= this.arr.length){
    returnVal.value= this.arr[this.num]
    this.num++
    return returnVal
  }
}
  //write code here
}

module.exports = { Iterator };
