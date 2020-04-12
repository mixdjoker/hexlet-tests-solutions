// @ts-check
import getWordCount from '../src/js_object/assosiate_object.js';

const wordCountTest = () => {
  console.log('Test for getWordCount:\n');

  const content = 'cat dog cat eye see cat dog';
  const result = getWordCount(content);
  console.log(result);
};

export default wordCountTest;
