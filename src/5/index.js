import fs from 'fs';
import path from 'path';

import { results, findMissing } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n');

console.log('Part 1: Highest seat id:',  Math.max(...results(input)));

console.log('Part 2: My seat is:', findMissing(results(input).sort((a, b) => a - b)));
