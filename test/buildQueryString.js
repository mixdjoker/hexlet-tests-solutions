// @ts-check
import bqs from '../src/experiments/buildQueryString.js';

console.log(bqs({ zper: 10, page: 1 }));
console.log(bqs({ param: 'all', param1: true }));
console.log(bqs({ wexpert: 'Alex', param1: true }));
console.log(bqs({ param: 'all' }));
