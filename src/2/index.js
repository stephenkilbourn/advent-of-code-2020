import fs from 'fs';
import path from 'path';

import { countValidSledPasswords, countValidTobogganPasswords } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n');

console.log(
  'Part 1: Count of valid passwords in Sled format in input.txt: ',
  countValidSledPasswords(input)
);

console.log(
  'Part 2: Count of valid passwords in Tobaggan format in input.txt: ',
  countValidTobogganPasswords(input)
);
