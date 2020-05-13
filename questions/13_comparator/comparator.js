//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, obj) => {
    for(let i = 0; i < obj.length; i++){
        if(!Object.keys(obj[i]).includes(selectKey)){
            return 'incorrect key'
        }
    }
    if (selectKey === 'age'){
        return obj.sort( (a, b) => {
            return a.age - b.age;
        });
    }
    
    else if (selectKey === 'name'){
        return obj.sort(function(a, b) {
            let nameA = a.name.split(' ')[1].toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.split(' ')[1].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0
        })
    }
}


// const ppl = [
//     { name: 'Justin C', age: 22 },
//     { name: 'Noah Z', age: 20 },
//     { name: 'Ethan A', age: 21 },
//   ]
// console.log(comparator('name', ppl))
module.exports = { comparator };
