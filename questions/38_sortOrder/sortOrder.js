/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data) {
  const sortOrdersSorted = data.sort(function (a,b) {
    return a.sortOrder - b.sortOrder}).map(e => e.name)

  return sortOrdersSorted

  // YOUR CODE
}

module.exports = { sortOrder };
