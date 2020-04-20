/* eslint-disable no-restricted-syntax */
// @ts-check

/**
 * @param {{}} params
 */
const buildQueryString = (params) => {
  const resultParams = [];
  const sortedKeys = Object.keys(params).sort();

  for (const key of sortedKeys) {
    resultParams.push(`${key}=${params[key]}`);
  }

  return resultParams.join('&');
};

export default buildQueryString;
