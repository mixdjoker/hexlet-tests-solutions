/* eslint-disable no-restricted-syntax */
// @ts-check

import _ from 'lodash';

/**
 * @param {Object} sourceObject
 * @param {Array} keyArray
 */
// BEGIN
const getIn = (sourceObject, keyArray) => {
  let innerData = sourceObject;
  for (const key of keyArray) {
    if (_.has(innerData, key)) {
      innerData = innerData[key];
    } else {
      return null;
    }
  }
  return innerData;
};

export default getIn;
// END
