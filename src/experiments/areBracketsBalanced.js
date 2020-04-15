/* eslint-disable no-restricted-syntax */
// @ts-check

// BEGIN
/**
 * @param {string} str
 */
const areBracketsBalanced = (str) => {
  const inputString = str.split('');
  const bufferArray = [];
  const stringBalanced = true;
  const stringUnbalanced = false;

  for (const element of inputString) {
    if (element === ')') {
      if (bufferArray.includes('(')) {
        bufferArray.pop();
      } else {
        return stringUnbalanced;
      }
    } else {
      bufferArray.push(element);
    }
  }

  return bufferArray.length === 0 ? stringBalanced : stringUnbalanced;
};

export default areBracketsBalanced;
// END

console.log(areBracketsBalanced('(())'));
console.log(areBracketsBalanced('((())(()))'));
