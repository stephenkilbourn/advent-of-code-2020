import fs from 'fs';
import path from 'path';

// map grid legend
// . is the floor
// L is an empty seat
// # is occupied seat
const testMapString =
  'L.LL.LL.LL\nLLLLLLL.LL\nL.L.L..L..\nLLLL.LL.LL\nL.LL.LL.LL\nL.LLLLL.LL\n..L.L.....\nLLLLLLLLLL\nL.LLLLLL.L\nL.LLLLL.LL';
const grid = testMapString
  .split('\n')
  .filter((x) => x)
  .map((x) => x.split(''));

function simulate(grid, strategy) {
  const clone = cloneGrid(grid);

  let changed = false;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      const occupiedNeighbors = strategy(clone, row, column);

      if (clone[row][column] === 'L') {
        if (!occupiedNeighbors) {
          grid[row][column] = '#';
          changed = true;
        }
      }

      if (clone[row][column] === '#') {
        if (occupiedNeighbors >= 4) {
          grid[row][column] = 'L';
          changed = true;
        }
      }
    }
  }

  return changed;
}

function cloneGrid(grid) {
  return JSON.parse(JSON.stringify(grid));
}

function countNeighbors(grid, x, y) {
  return [
    getValue(grid, x - 1, y - 1),
    getValue(grid, x - 1, y),
    getValue(grid, x - 1, y + 1),
    getValue(grid, x, y - 1),
    getValue(grid, x, y + 1),
    getValue(grid, x + 1, y - 1),
    getValue(grid, x + 1, y),
    getValue(grid, x + 1, y + 1),
  ].filter((x) => x === '#').length;
}

function getValue(grid, x, y) {
  // make sure we are on thte grid
  return x < 0 || y < 0 || x >= grid.length || y >= grid[x].length
    ? ''
    : grid[x][y];
}

const grid1 = cloneGrid(grid);

while (simulate(grid1, countNeighbors));

console.log(grid1.flatMap((x) => x).filter((x) => x === '#').length);

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'))
  .toString()
  .split('\n')
  .filter((x) => x)
  .map((x) => x.split(''));

const grid2 = cloneGrid(input);

while (simulate(grid2, countNeighbors));

console.log(grid2.flatMap((x) => x).filter((x) => x === '#').length);
