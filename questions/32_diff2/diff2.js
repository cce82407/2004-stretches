// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arr) => {
    if(!Array.isArray(arr)){
        throw Error
    }
    let diffTwoArr = []
    for (let i = 0; i < arr.length-1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (Math.abs(arr[i]-arr[j]) === 2){
                let sortedEl = [arr[i], arr[j]].sort(function (a,b){
                    return a-b
                })
                diffTwoArr.push(sortedEl)
            }
            console.log(diffTwoArr)
        }
    } 
    return diffTwoArr.sort()
};

module.exports = { diffTwo };
