import fs from 'fs';
import path from 'path';

import {
  parseInstructions,
  runInstructions,
  findBrokenInstructions,
} from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n');

const parsedInstructions = parseInstructions(input);
console.log(
  'Part 1: accumulator value when loop finished',
  runInstructions(parsedInstructions)
);

console.log(
  'Part 2: find broken and look for final accumulator',
  findBrokenInstructions(parseInstructions(input))
);
