// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(updateObj) {
    // This was the old way, which mutated the current state
      // const stateKeys = Object.keys(updateObj)[0]
      // this.state[stateKeys] = updateObj[stateKeys]
    
    //This way did not mutate the state. Use Object.assign to create
    //a new object for a shallow copy.

    let newObj = Object.assign({},this.state)
    console.log(newObj)
    const stateKeys = Object.keys(updateObj)[0]
    newObj[stateKeys] = updateObj[stateKeys]
    this.state = newObj
    return this.state
      }
    }
    
  


module.exports = { StatefulThing };
