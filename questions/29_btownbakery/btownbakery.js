// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  if (typeof recipe !== 'object' || typeof supplies !== 'object'){
    throw Error
  }
  let possibleCakes = {}
  for (let ing in recipe){
    possibleCakes[ing] = Math.floor(supplies[ing]/recipe[ing])
    
  }
  return Math.min(...Object.values(possibleCakes))
};

module.exports = { btownbake };
