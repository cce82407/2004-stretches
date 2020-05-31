const findBy = (groceries, key, value) => {
  return groceries.find(item => item[`${key}`] === `${value}`)
} 
module.exports = { findBy };
