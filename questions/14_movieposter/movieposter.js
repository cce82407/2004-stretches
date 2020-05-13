//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (words) => {
  if (words.length === 0){
    throw Error
  }
  moviePoster = ''
  let maxLength = 0
  for (let i = 0; i <words.length; i++){
    if (words[i].length > maxLength){
      maxLength = words[i].length
    }
  }
  console.log(maxLength)
  for (let j = 0; j < words.length + 1; j++){
    if (i === 1){
      moviePoster.push("*")[0])
    }
  }
  console.log(moviePoster)
  //write code here
};

module.exports = { movieposter };
