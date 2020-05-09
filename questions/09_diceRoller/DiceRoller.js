// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor (sides, numDice){
    if (typeof sides !== 'number'|| typeof numDice !== 'number' || sides < 1 || numDice < 1){
      throw Error
    }
    this.history = []
    this.sides = sides
    this.numDice = numDice
  }
  roll(){
    const helperFunc = () => {
      let rolls = []
      for (let i = 0; i < this.numDice; i++){
        let rollVal = Math.ceil(Math.random()*5)
        rolls.push(rollVal)
      }
      this.history.push(rolls)
      return rolls
    }
  return helperFunc()
  }
}
  module.exports = { DiceRoller };
