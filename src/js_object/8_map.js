/* eslint-disable no-param-reassign */
// @ts-check
import crc32 from 'crc-32';

// BEGIN
/**
 * @param {any} word
 */
const getHash = (word) => {
  const maxHashValue = 10000;
  let hash = 0;
  if (typeof (word) === 'string') {
    hash = crc32.str(word);
  } else {
    hash = crc32.str(word.toString());
  }

  return Math.abs(hash) % maxHashValue;
};

export const make = () => [];

/**
 * @param {any[]} map
 * @param {any} key
 * @param {any} value
 */
export const set = (map, key, value) => {
  const setFalseResult = false;
  const setTrueResult = true;

  const hash = getHash(key);

  if (map[hash]) {
    const [includedKey] = map[hash];
    if (includedKey !== key) {
      return setFalseResult;
    }
  }

  map[hash] = [key, value];
  return setTrueResult;
};

/**
 * @param {any[]} map
 * @param {any} key
 * @param {any} defaultValue
 */
export const get = (map, key, defaultValue = null) => {
  const hash = getHash(key);

  if (!map[hash]) {
    return defaultValue;
  }

  const [currentKey, currentValue] = map[hash];

  return (currentKey === key) ? currentValue : defaultValue;
};
// END

const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"
