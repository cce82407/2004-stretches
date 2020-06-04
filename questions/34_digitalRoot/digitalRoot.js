/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE

class digitalRoot {
    root(num){
        if (num.toString().length === 1){
            return num
        }

            const strNum = (num).toString()
            const arrNum = Array.prototype.map.call(strNum, num => num)
            const newNum = arrNum.map(number => parseInt(number)).reduce((acc, num) => acc+num)
            return this.root(newNum)
        }
        
    }

module.exports = { digitalRoot };
