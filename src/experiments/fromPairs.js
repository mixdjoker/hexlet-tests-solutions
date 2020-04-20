/* eslint-disable no-restricted-syntax */
// @ts-check

/**
 * @param {any[]} pairs
 */
const fromPairs = (pairs) => {
  const returnPairs = {};
  for (const pair of pairs) {
    const [key, value] = pair;
    returnPairs[key] = value;
  }

  return returnPairs;
};

export default fromPairs;
