import fs from 'fs';
import path from 'path';

import { countTrees } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n');

console.log(
  'Part 1: Count of trees in input.txt going down 1 row and right 3: ',
  countTrees(input)
);
