class BookReview {
    constructor(title, author){
    this.title = title
    this.author = author
    this.notes = new Array (15)
    this.rating = 0
    }

    addNotes (page, note){
        if(this.notes.length === 0){
        this.notes = new Array(page)
        }
        if (this.notes[page]){
        this.notes.push(note)
        }
        else (this.note[page] = note)

    }
    addRating (num){
        if (num < 0 || num > 5){
            throw Error
        }
        else this.rating = num
    }
}
module.exports = { BookReview };
