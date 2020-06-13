//YOUR CODE HERE


class Box {
    constructor(color, capacity, contents){
        this.color = color,
        this.capacity = capacity,
        this.contents = []
    }
    
    pack(color, capacity){
        const newBox = new Box(color, capacity)
        if(this.contents.length === this.capacity){
            throw Error
        }
        this.contents.push(newBox)
    }
    unpack(){
        return this.contents
    }

}
module.exports = { Box };
