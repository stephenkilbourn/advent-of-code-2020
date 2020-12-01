const valuesWithSumTo2020 = (numberArray) => {
  //find elements in number array that sum to 2020
  const targetValue = 2020;
  let resultsArray = [];
  let previousNumbers = [];

  for (let x in numberArray) {
    for (let y in numberArray) {
      if (numberArray[x] + numberArray[y] === targetValue) {
        if (!!resultsArray.length) {
          if (
            !previousNumbers.includes(numberArray[x]) &&
            !previousNumbers.includes(numberArray[y])
          ) {
            results.push(numberArray[x], numberArray[y]);
          }
        } else {
          resultsArray.push(numberArray[x], numberArray[y]);
          previousNumbers.push(numberArray[x]);
        }
      }
    }
  }

  return resultsArray;
};

const productOfArrayEntries = (array) => {
  const product = array.reduce(function (a, b) {
    return a * b;
  });
  return product;
};

const productOf2020Elements = (array) => {
  return productOfArrayEntries(valuesWithSumTo2020(array));
};

export { valuesWithSumTo2020, productOfArrayEntries, productOf2020Elements };
