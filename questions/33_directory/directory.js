//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  finalObj = {}

  for(let key1 in obj){
    if (typeof obj[key1] !== 'object'){
      let objKey
     
      objKey = `${key1}/${obj[key1]}`
      return objKey
    }
  }
  //code in here
};

module.exports = { directory };
