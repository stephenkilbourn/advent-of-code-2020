// strip new line from string
const test = 'abc\na';

const test2 = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b'];
// strip new line from string
const removeNewLines = (string) => {
  let cleanString = string.replace(/\n/g, '');

  return cleanString;
};

//count unique answers in group
const countUnique = (string) => {
  const distinctAnswers = [...new Set(string)];
  return distinctAnswers.length;
};
// count total for each group
const addGroups = (arrayOfGroups) => {
  let count = 0;
  arrayOfGroups.forEach((group) => {
    count = count + countUnique(removeNewLines(group));
  });
  return count;
};

const answeredByAll = (string) => {
  let stringArray = string.toString().split('\n');
  let uniqueAnswers = {};
  stringArray.forEach((person) => {
    for (let answer of person) {
      uniqueAnswers[answer] = uniqueAnswers[answer] + 1 || 1;
    }
  });
  let count = [];
  for (let key of Object.keys(uniqueAnswers)) {
    if (uniqueAnswers[key] === stringArray.length) {
      count.push(key);
    }
  }
  return count.length;
};

const addUniqueGroups = (arrayOfGroups) => {
  let count = 0;
  arrayOfGroups.forEach((group) => {
    count = count + answeredByAll(group);
  });
  return count;
};

export { addGroups, addUniqueGroups, answeredByAll };
