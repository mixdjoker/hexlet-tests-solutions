/* eslint-disable no-restricted-syntax */
// @ts-check

// BEGIN
/**
 * @param {any[]} arr
 * @param {number} chunkLength
 */
const chunk = (arr, chunkLength) => {
  let currentChunkIndex = 0;
  const resultArray = [];
  let chunkArray = [];

  for (const element of arr) {
    if (currentChunkIndex === chunkLength) {
      currentChunkIndex = 1;
      resultArray.push(chunkArray);
      chunkArray = [];
      chunkArray.push(element);
    } else {
      currentChunkIndex += 1;
      chunkArray.push(element);
    }
  }

  if (chunkArray.length !== 0) {
    resultArray.push(chunkArray);
  }

  return resultArray;
};

export default chunk;
// END

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
