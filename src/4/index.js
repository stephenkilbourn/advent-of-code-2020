import fs from 'fs';
import path from 'path';

import { checkListOfPassports, closelyCheckListofPassports } from './main';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n\n');

const passportFields = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];
console.log(
  'Part 1: Number of valid passports (skipping cid): ',
  checkListOfPassports(input, passportFields)
);

console.log(
  'Part 2: list of valid passports upon further inspection (skipping cid): ',
  closelyCheckListofPassports(input, passportFields)
);
