import fs from 'fs';
import path from 'path';

import { countValidPasswords } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
 
console.log(
  'Count of valid passwords in input.txt: ',
  countValidPasswords(input)
);