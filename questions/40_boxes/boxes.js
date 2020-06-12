//YOUR CODE HERE


class Box {
    constructor(color, capacity, contents){
        this.color = color,
        this.capacity = capacity,
        this.contents = []
    }
    
    pack(color, capacity){
        const newBox = new Box(color, capacity)
        this.contents.push(newBox)
    }

}
module.exports = { Box };
