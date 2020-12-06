import fs from 'fs';
import path from 'path';

import { addGroups } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n\n');

console.log('Part 1: add groups', addGroups(input));
