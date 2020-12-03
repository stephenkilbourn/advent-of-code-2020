const checkForTree = (line, position) => {
  if (line.charAt(position - 1) === '#') {
    return true;
  } else {
    return false;
  }
};

const countTrees = (mapArray, rowsDown = 1, columnsRight = 3) => {
  let count = 0;
  let testPosition = 1 + columnsRight;
  let testedMap = [];

  for (let index = 1; index < mapArray.length; index = index + rowsDown) {
    const row = mapArray[index];
    testedMap.push(row);
    if (testPosition > row.length) {
      testPosition = testPosition - row.length;
    }
    if (checkForTree(row, testPosition)) {
      count++;
    } 
    testPosition = testPosition + columnsRight;
  }

  return count;
};

export { checkForTree, countTrees };
