// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456


   
const floydsTriangle = n => {
    if (n === 0){
        return ''
    }
    
    const triangleNum = (n) => {
        if (n===0){
            return 0
        }
        if (n === 1){
        return 1
    }
    return triangleNum(n-1)+n 
    
    }
    let finalTriangle = ''
    
    for (let i = 1; i <= n; i++ ){
        let row = ''
        for (let j = triangleNum(i-1)+1; j <=  triangleNum(i); j++){
            row += j
        }
        finalTriangle += `${row}` + '\n'
    }
    if (finalTriangle.length === 1){
        return '1'
    }
    return finalTriangle
}
console.log(floydsTriangle(1))



module.exports = { floydsTriangle };
