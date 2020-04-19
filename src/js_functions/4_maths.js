// @ts-check
import _ from 'lodash';

/**
 * @param {any[]} args
 */
const average = (...args) => {
  if (args.length === 0) {
    return null;
  }

  const result = _.sum(args) / args.length;

  return result;
};

export default average;

console.log(average(0));
console.log(average(0, 10));
console.log(average(-3, 4, 2, 10));
console.log(average());
