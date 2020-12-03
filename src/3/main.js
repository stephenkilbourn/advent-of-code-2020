const checkForTree = (line, position) => {
  if (line.charAt(position - 1) === '#') {
    return true;
  } else {
    return false;
  }
};

const countTrees = (mapArray, columnsRight = 3, rowsDown = 1) => {
  let count = 0;
  let testPosition = 1 + columnsRight;

  for (let index = rowsDown; index < mapArray.length; index = index + rowsDown) {
    const row = mapArray[index];

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

const productOfTreeCounts = (slopesArray, mapArray) => {
  let counts = 1;
  slopesArray.forEach((slopes) => {
    const newTrees = countTrees(mapArray, slopes[0], slopes[1]);
    if (newTrees !== 0) {
      counts = counts * countTrees(mapArray, slopes[0], slopes[1]);
    }
  });
  return counts;
};

export { checkForTree, countTrees, productOfTreeCounts };
