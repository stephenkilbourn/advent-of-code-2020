import fs from 'fs';
import path from 'path';

import { productOfTwo2020Elements, binarySearchTwoSum } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .map(Number);

console.log(
  'Product of two values in input.txt that equaled 2020: ',
  productOfTwo2020Elements(input)
);

console.log(
  'Product of three values in input.txt that equaled 2020: ',
  productOfTwo2020Elements(input)
);

console.log(
  'binary search: ',
  binarySearchTwoSum([1721, 979, 366, 299, 675, 1456])
);
