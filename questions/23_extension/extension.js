//write a function that takes a function, and makes it callable with two invocations

const extensions = (func) => {
    // if (typeof num1 !== 'number'|| typeof num2 !== 'number'){
    //     throw Error
    // }
    //counter = 0
    //let value
    if (typeof func !== 'function'){
        throw Error
    }
     return function(num1){
        if (typeof num1 !== 'number'){
            throw Error
        }
         return function(num2){
             if (typeof num2 !== 'number'){
                 throw Error
             }
             return func(num1, num2)
         }
     }

     
    
};


module.exports = { extensions };
