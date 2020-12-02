const parseSledPassword = (passwordString) => {
  const parsedPassword = {};
  const splitPassword = passwordString.split(/[-,\s,:]/);
  parsedPassword.min = splitPassword[0];
  parsedPassword.max = splitPassword[1];
  parsedPassword.keyLetter = splitPassword[2];
  parsedPassword.password = splitPassword[splitPassword.length - 1];

  return parsedPassword;
};

const parseTobagganPassword = (passwordString) => {
  const parsedPassword = {};
  const splitPassword = passwordString.split(/[-,\s,:]/);
  parsedPassword.position1 = splitPassword[0];
  parsedPassword.position2 = splitPassword[1];
  parsedPassword.keyLetter = splitPassword[2];
  parsedPassword.password = splitPassword[splitPassword.length - 1];

  return parsedPassword;
};

const sledPasswordValidation = (parsedPassword) => {
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

const tobagganPasswordValidation = (parsedPassword) => {
  // parse password

  // first entry must have keyLetter
  // second entry must not have keyLetter
  const position1 = parsedPassword.position1;
  const position2 = parsedPassword.position2;
  const keyLetter = parsedPassword.keyLetter;
  const password = parsedPassword.password;

  switch (true) {
    case password.charAt(position1 - 1) === keyLetter &&
      password.charAt(position2 - 1) !== keyLetter:
      return true;
    case password.charAt(position1 - 1) !== keyLetter &&
      password.charAt(position2 - 1) === keyLetter:
      return true;
    default:
      return false;
  }
};

const countValidSledPasswords = (input) => {
  let validCount = 0;
  //parse password line
  input.forEach((passwordString) => {
    if (sledPasswordValidation(parseSledPassword(passwordString))) {
      validCount++;
    }
  });

  return validCount;
};

const countValidTobogganPasswords = (input) => {
  let validCount = 0;
  //parse password line
  input.forEach((passwordString) => {
    if (tobagganPasswordValidation(parseTobagganPassword(passwordString))) {
      validCount++;
    }
  });

  return validCount;
};

export {
  parseSledPassword,
  parseTobagganPassword,
  sledPasswordValidation,
  countValidSledPasswords,
  tobagganPasswordValidation,
  countValidTobogganPasswords,
};
