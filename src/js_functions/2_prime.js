// @ts-check

/**
 * @param {number} num
 */
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let index = 2; index <= num / 2; index += 1) {
    if ((num % index) === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} num
 */
const sayPrimeOrNot = (num) => {
  const outText = isPrime(num) ? 'yes' : 'no';
  console.log(outText);
};

export default sayPrimeOrNot;
