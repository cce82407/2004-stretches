// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  if(str1.length !== str2.length){
    return false
  }
  
  for(let i = 0; i< str1.length; i++){
    if (str2.includes(str1[i])){
      return true
    }
  }
  //YOUR CODE
};

module.exports = { checkAnagrams };
