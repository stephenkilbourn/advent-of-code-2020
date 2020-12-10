import fs from 'fs';
import path from 'path';

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .map((x) => Number(x));

const testarray = [
  35,
  20,
  15,
  25,
  47,
  40,
  62,
  55,
  65,
  95,
  102,
  117,
  150,
  182,
  127,
  219,
  299,
  277,
  309,
  576,
];

function findSumOfArrayPairs(array) {
  //for each pair in array, find sum
  //take array divide by half (cieling).
  const possibleSums = [];

  for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < array.length;
      secondIndex++
    ) {
      possibleSums.push(array[firstIndex] + array[secondIndex]);
    }
  }
  let uniquePossibleSomes = [...new Set(possibleSums)];
  return uniquePossibleSomes;
}

function findFirstBadNumber(inputArray, preambleLength = 25) {
  const preamble = inputArray.slice(0, preambleLength);
  const initialCode = inputArray.slice(preambleLength);
  for (let index = 0; index < initialCode.length; index++) {
    let validValues = findSumOfArrayPairs(preamble);
    if (validValues.includes(initialCode[index])) {
      preamble.shift();
      preamble.push(initialCode[index]);
    } else {
      return initialCode[index];
    }
  }
}

console.log('part 1: ', findFirstBadNumber(input));
// console.log(findSumOfArrayPairs(testarray));
