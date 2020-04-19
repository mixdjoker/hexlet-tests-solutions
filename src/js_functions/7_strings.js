// @ts-check

/**
 * @param {number} strLength
 * @param {number} charCount
 */
const isParamsBad = (strLength, charCount) => {
  if (strLength === 0) {
    return true;
  }
  if (strLength < charCount) {
    return true;
  }
  return false;
};

/**
 * @param {string | any[]} inputString
 * @param {number} maxChars
 */
const takeLast = (inputString, maxChars) => {
  if (isParamsBad(inputString.length, maxChars)) {
    return null;
  }
  const resultArray = [];
  const lastIndex = inputString.length - 1;
  const minIndex = inputString.length - maxChars;

  for (let index = lastIndex; index >= minIndex; index -= 1) {
    const char = inputString[index];
    resultArray.push(char);
  }

  return resultArray.join('');
};

export default takeLast;
