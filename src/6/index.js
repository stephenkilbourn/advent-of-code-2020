import fs from 'fs';
import path from 'path';

import { addGroups, addUniqueGroups } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n\n');

console.log('Part 1: add groups', addGroups(input));

console.log('Part 2: add answers of groups', addUniqueGroups(input));
