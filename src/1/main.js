const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  let midPoint = ~~(start + (end - start) / 2);

  switch (true) {
    case array[start] === target:
      return array[start];
    case array[midPoint] === target:
      return array[midPoint];
    case array[end] === target:
      return array[end];
    case end - start === 0:
      return false;
    case array[midPoint] > target:
      return binarySearch(array, target, start + 1, midPoint - 1);
    case array[midPoint] < target:
      return binarySearch(array, target, midPoint + 1, end - 1);
  }
  return false;
};

const binarySearchTwoSum = (array, sum) => {
  let sortedArray = array.sort((a, b) => a - b);

  let results = [];
  let prevNums = [];

  for (let i in sortedArray) {
    let addend = binarySearch(sortedArray, sum - sortedArray[i]);
    if (
      !!addend &&
      !prevNums.includes(array[i]) &&
      !prevNums.includes(addend)
    ) {
      results.push(sortedArray[i], addend);
      prevNums.push(addend);
    }
  }
  return results;
};

const productOfArrayEntries = (array) => {
  const product = array.reduce(function (a, b) {
    return a * b;
  });
  return product;
};

const productOfTwo2020Elements = (array) => {
  return productOfArrayEntries(binarySearchTwoSum(array, 2020));
};

export {
  binarySearchTwoSum,
  productOfArrayEntries,
  productOfTwo2020Elements,
  binarySearch,
};
