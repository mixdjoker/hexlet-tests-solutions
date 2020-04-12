// @ts-check
import _ from 'lodash';

/**
 *
 * @param {String} content
 */

const getWordCount = (content) => {
  const words = content.split(' ');
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const word of words) {
    result[word] = _.get(result, word, 0) + 1;
  }

  return result;
};

export default getWordCount;
