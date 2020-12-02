import fs from 'fs';
import path from 'path';

import {
  productOfTwo2020Elements,
  productOfThree2020Elements,
  binarySearchThreeSum,
} from './main';

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
  'three values in input.txt that equaled 2020: ',
  binarySearchThreeSum(input, 2020)
);

console.log(
  'Product of three values in input.txt that equaled 2020: ',
  productOfThree2020Elements(input)
);
