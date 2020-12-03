import fs from 'fs';
import path from 'path';

import { countTrees, productOfTreeCounts } from './main';

const slopesArray = [
  [3, 1],
  [1, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n');

console.log(
  'Part 1: Count of trees in input.txt going right 3 and down 1 row: ',
  countTrees(input)
);

console.log(
  'Part 2: product of trees in input.txt for given slopes: ',
  productOfTreeCounts(slopesArray, input)
);
