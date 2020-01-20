/**
 * Array.prototype.map, but with async callbacks
 * @param {Array.<any>} array 
 * @param {Function} asyncCallbackMethod 
 * @param {Object} [thisArgument]
 * @returns {Array.<any>}
 */
async function asyncMap(array, asyncCallbackMethod, thisArgument) {
  const outputArray = [];

  for (const [ index, element ] of array.entries()) {
    if (thisArgument) {
      outputArray.push(await asyncCallbackMethod.call(thisArgument, element, index, array));
    }
    else {
      outputArray.push(await asyncCallbackMethod(element, index, array));
    }
  }

  return outputArray;
}

module.exports = asyncMap;