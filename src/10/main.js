import fs from 'fs';
import path from 'path';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .map((x) => Number(x));

const initialTestInput = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

const testInput = [
  28,
  33,
  18,
  42,
  31,
  14,
  46,
  20,
  48,
  47,
  24,
  23,
  49,
  45,
  19,
  38,
  39,
  11,
  1,
  32,
  25,
  35,
  8,
  17,
  7,
  9,
  4,
  2,
  34,
  10,
  3,
];

const buildAdapterChain = (availableAdapters) => {
  let sortedAdapters = availableAdapters.sort((a, b) => a - b);

  let joltageSteps = sortedAdapters.map((x, i, arr) => x - (arr[i - 1]));

  let countOfThrees = joltageSteps.filter((x) => x === 3).length + 1; // there's always an additional step of three from the built in adapter
  let countOfOnes = joltageSteps.filter((x) => x === 1).length;

  return countOfOnes * countOfThrees;
};

console.log('part 1: product of ones and threes', buildAdapterChain(input));
