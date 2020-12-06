const returnNewRange = (array, chosenHalf, lowerIndicator, higherIndicator) => {
  let newArray = [];

  const half = Math.ceil(array.length / 2);

  if (chosenHalf === lowerIndicator) {
    if (array.length === 2) {
      newArray = array[0];
    } else {
      newArray = array.splice(0, half);
    }
  } else if (chosenHalf === higherIndicator) {
    if (array.length === 2) {
      newArray = array[1];
    } else {
      newArray = array.splice(-half);
    }
  }
  return newArray;
};

const findRow = (rowString) => {
  let myArray = Array.apply(null, Array(128)).map(function (x, i) {
    return i;
  });

  rowString.split('').forEach(function (char) {
    if (myArray.length > 1) {
      myArray = returnNewRange(myArray, char, 'F', 'B');
    }
  });

  return myArray;
};

const findColumn = (columnString) => {
  let myArray = Array.apply(null, Array(8)).map(function (x, i) {
    return i;
  });

  columnString.split('').forEach(function (char) {
    if (myArray.length > 1) {
      myArray = returnNewRange(myArray, char, 'L', 'R');
    }
  });

  return myArray;
};

const results = (inputs) => {
  let seatIDs = [];
  inputs.forEach((input) => {
    let seat =
      findRow(input.substring(0, 7)) * 8 + findColumn(input.substring(7, 10));
    seatIDs.push(seat);
  });
  return seatIDs;
};

const testSeats = [1, 2, 3, 5, 6, 10];
const findMissing = (inputArray) => {
  let missing = [];
  for (let index = 1; index < inputArray.length - 1; index++) {

    let seat = inputArray[index];
    if (!inputArray.includes(seat + 1)) {
      return seat + 1;
    }
  }

  console.log('missing seats', missing);
};

export { results, findMissing };
