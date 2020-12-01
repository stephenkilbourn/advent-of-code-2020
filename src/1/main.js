const valuesWithSumTo2020 = (numberArray) => {
  //find elements in number array that sum to 2020
  const targetValue = 2020;
  let storageHash = {};
  let resultsArray = [];
  let previousNumbers = [];

  for (let i in numberArray) {
    let addend = targetValue - numberArray[i];
    if (addend in storageHash) {
      resultsArray.push(addend, numberArray[i]);
    }
    storageHash[numberArray[i]] = i;
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
