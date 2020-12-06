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
// strip new line from string
// count total for each group
const addGroups = (arrayOfGroups) => {
  let count = 0;
  arrayOfGroups.forEach((group) => {
    count = count + countUnique(removeNewLines(group));  });
  return count;
};


export { addGroups}
