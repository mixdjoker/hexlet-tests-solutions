/* eslint-disable no-restricted-syntax */
// @ts-check

// BEGIN
/**
 * @param {object} inObject
 * @param {any[]} keyArray
 */
const pick = (inObject, keyArray) => {
  const result = {};
  const entries = Object.keys(inObject);
  for (const key of entries) {
    if (keyArray.includes(key)) {
      result[key] = inObject[key];
    }
  }

  return result;
};

export default pick;
// END

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(pick(data, ['user']));
console.log(pick(data, ['user', 'os']));
console.log(pick(data, []));
console.log(pick(data, ['none']));
