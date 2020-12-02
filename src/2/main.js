const passwordValidation = (parsedPassword) => {
  // parse minimum count
  const min = parsedPassword.min;
  const max = parsedPassword.max;
  const keyLetter = parsedPassword.keyLetter;
  const password = parsedPassword.password;

  //get count of keyLetter in password
  let count = [...password].filter((x) => x === keyLetter).length;

  if (count <= max && count >= min) {
    return true;
  } else {
    return false;
  }
};

const parsePassword = (passwordString) => {
  const parsedPassword = {};
  const splitPassword = passwordString.split(/[-,\s,:]/);
  parsedPassword.min = splitPassword[0];
  parsedPassword.max = splitPassword[1];
  parsedPassword.keyLetter = splitPassword[2];
  parsedPassword.password = splitPassword[splitPassword.length - 1];

  return parsedPassword;
};

const countValidPasswords = (input) => {
  let validCount = 0;
  //parse password line
  input.forEach((passwordString) => {
    if (passwordValidation(parsePassword(passwordString))) {
      validCount++;
    }
  });

  return validCount;
};

countValidPasswords(['1-3 a abcde', '2-9 c: ccccccccc']);

export { parsePassword, passwordValidation, countValidPasswords };
