//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (a, b) => {
    const copyA = a.slice()
    const copyB = b.slice()
    if (typeof a !== 'object' || typeof b !== 'object') {
        throw Error
    }
    //Clearing contents of b, replacing with contents of a
    while (b.length > 0) {
        b.shift()
    }
    for (let i = 0; i < copyA.length; i++) {
        b.unshift(copyA[i])
    }

    //Clearing contents of a, replacing with contents of b
    while (a.length > 0) {
        a.shift()
    }

    for (let i = 0; i < copyB.length; i++) {
        a.unshift(copyB[i])
    }
};

//arrayexchange(['1', '2', '3'], ['a', 'b', 'c'])

module.exports = { arrayexchange };

