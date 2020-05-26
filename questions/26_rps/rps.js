//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  constructor(name1, name2){
    this.name1 = name1
    this.name2 = name2
    this.players = [name1, name2]
    this.player1wins = 0
    this.player2wins = 0
  }

  play(player1move, player2move){
    if (player1move === 'Rock'){ 
      if (player2move === 'Scissors'){
        this.player1wins ++
        return `Rock defeats Scissors, ${this.name1} wins this round.`
      }
      if (player2move === 'Paper') 
        this.player2wins ++
        return `Paper defeats Rock, ${this.name2} wins this round.`
      }
    
      if (player1move === 'Paper'){ 
        if (player2move === 'Rock'){
          this.player1wins ++
          return `Paper defeats Rock, ${this.name1} wins this round.`
        }
        if (player2move === 'Scissors'){ 
          this.player2wins ++
          return `Scissors defeats Paper, ${this.name2} wins this round.`
        }
      }

        if (player1move === 'Scissors'){ 
          if (player2move === 'Paper'){
            this.player1wins ++
            return `Scissors defeats Paper, ${this.name1} wins this round.`
          }
          if (player2move === 'Rock'){ 
            this.player2wins ++
            return `Rock defeats Scissors, ${this.name2} wins this round.`
          }
        }
      }

      winner(){
        if (this.player1wins > this.player2wins){
          return `The victor is ${this.name1} with ${this.player1wins} points.`
        }
        return `The victor is ${this.name2} with ${this.player2wins} points.`
      }
    }

module.exports = { RPS };
