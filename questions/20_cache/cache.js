// see test specs

function cache(func) {
  if (typeof func !== 'function'){
    throw Error ('Input must be a function.')
  }
  let prevArg = ''
  return function(arg){
    if (prevArg !== arg.toString()){
      prevArg += arg.toString()
     return func(arg)
  }
}
}

module.exports = { cache };
