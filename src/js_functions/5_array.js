/* eslint-disable no-restricted-syntax */
// @ts-check
import _ from 'lodash';

/**
 * @param {any[]} arrays
 */
const union = (...arrays) => {
  const resultArray = [];
  for (const array of arrays) {
    const uniqElementArray = _.uniq(array);
    resultArray.push(...uniqElementArray);
  }
  return _.uniq(resultArray);
};

export default union;


// export default (first, ...rest) => {
//   const concated = first.concat(...rest);
//   return uniq(concated);
// };
