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

const binarySearchTwoSum = (array, target) => {
  let sortedArray = array.sort((a, b) => a - b);

  let results = [];
  let prevNums = [];

  for (let i in sortedArray) {
    let addend = binarySearch(sortedArray, target - sortedArray[i]);
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

const binarySearchThreeSum = (array, target) => {
  let sortedArray = array.sort((a, b) => a - b);

  let results = [];

  for (let indexA = 0; indexA < array.length - 2; indexA++) {
    // skip any entries over our target value
    if (sortedArray[indexA] > target) return results;

    let indexB = indexA + 1;
    let indexC = sortedArray.length - 1;

    // the continue jumps over an iteration of the for loop if two successive elements are identical
    if (indexA > 0 && sortedArray[indexA] === sortedArray[indexA - 1]) continue;

    while (indexB < indexC) {
      let sum = sortedArray[indexA] + sortedArray[indexB] + sortedArray[indexC];

      if (sum < target) {
        indexB++;
      } else if (sum > target) {
        indexC--;
      } else {
        // hacky way of not allowing combos of just two values
        if (
          sortedArray[indexA] !== 0 &&
          sortedArray[indexB] !== 0 &&
          sortedArray[indexC] !== 0
        ) {
          results.push(
            sortedArray[indexA],
            sortedArray[indexB],
            sortedArray[indexC]
          );
        }
        indexB++;
        indexC--;
      }
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

const productOfThree2020Elements = (array) => {
  return productOfArrayEntries(binarySearchThreeSum(array, 2020));
};

export {
  binarySearchTwoSum,
  binarySearchThreeSum,
  productOfArrayEntries,
  productOfTwo2020Elements,
  productOfThree2020Elements,
  binarySearch,
};
