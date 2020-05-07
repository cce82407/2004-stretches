const lockBox = (code, message) => {
  console.log('new changes')
  if (typeof code !== 'number'|| typeof message !== 'string'){
    throw Error
  }
  
  let accessCode = code
  let secretMessage = message
  return {
    modCode:  (prevCode, newCode) => {
      if (preCode !== accessCode){
        throw new Error ('access denied')
      }
      else {
        accessCode = newCode
        return accessCode
      }
    },
    modMessage: (passCode, newMessage) => {

    if (passCode !== accessCode){
        throw new Error ('access denied')
      }
      else {
        secretMessage = newMessage
        return secretMessage
      }
    },
    revealMessage: (passCode) => {
      if (passCode !== accessCode){
      throw new Error ('access denied')
    }
    else {
      return secretMessage
    }
  }
 
  }
};



module.exports = { lockBox };
