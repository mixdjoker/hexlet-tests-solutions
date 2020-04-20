/* eslint-disable no-unreachable */
// @ts-check

// BEGIN
/**
 * @param {string} nukl
 */
const mapping = (nukl) => {
  switch (nukl) {
    case 'G':
      return 'C';
      break;
    case 'C':
      return 'G';
      break;
    case 'T':
      return 'A';
      break;
    case 'A':
      return 'U';
      break;
    default:
      return null;
      break;
  }
};

/**
 * @param {string | any[]} dna
 */
const transkript = (dna) => {
  let rna = '';
  if (dna === '') {
    return '';
  }
  for (let strIndex = 0; strIndex < dna.length; strIndex += 1) {
    const newNukl = mapping(dna[strIndex]);
    if (newNukl === null) {
      return null;
    }
    rna += newNukl;
  }

  return rna;
};

export default transkript;

// END
