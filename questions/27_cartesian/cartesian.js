const cartesian = (directions) => {
  if (!Array.isArray(directions)){
    throw Error
  }
  
  dObj = {
    'n': 0,
    's': 0,
    'e': 0,
    'w': 0
  }

  for (let i = 0; i < directions.length; i ++){
    dObj[directions[i]]++
  }
  if (dObj['n'] === dObj['s'] && dObj['e'] === dObj['w']){

    return "These directions don't go anywhere!"
  }
  if (dObj['n'] === dObj['s']){
    dObj['n'] = 0
    dObj['s'] = 0
  }
  if (dObj['e'] === dObj['w']){
    dObj['e'] = 0
    dObj['w'] = 0
  }
  if (dObj['n'] > dObj['s']){
    dObj['n'] = dObj['n'] - dObj['s']
    dObj['s'] = 0
  }
  if (dObj['n'] < dObj['s']){
    dObj['s'] = dObj['s'] - dObj['n']
    dObj['n'] = 0
  }
  if (dObj['e'] > dObj['w']){
    dObj['e'] = dObj['e'] - dObj['w']
    dObj['e'] = 0
  }
  if (dObj['e'] < dObj['w']){
    dObj['w'] = dObj['w'] - dObj['e']
    dObj['e'] = 0
  }
return dObj

}
module.exports = { cartesian };
