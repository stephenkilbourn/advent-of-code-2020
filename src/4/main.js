//split string on into key value pairs

const passportFields = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];

const parsePassportFields = (fieldString, requiredFields) => {
  let validFieldCount = 0;
  requiredFields.forEach((element) => {
    if (fieldString.includes(element)) {
      validFieldCount++;
    }
  });
  if (validFieldCount === requiredFields.length) {
    return true;
  } else {
    return false;
  }
};

const checkListOfPassports = (arrayOfPassports, requiredFields) => {
  let validCount = 0;
  arrayOfPassports.forEach((passport) => {
    if (parsePassportFields(passport, requiredFields)) {
      validCount++;
    }
  });
  return validCount;
};

const stringToKeyValuePair = (string) => {
  let array = string.split(/\s+/);
  let kvp = {};
  for (var i = 0; i < array.length; i++) {
    var split = array[i].split(':');
    kvp[split[0].trim()] = split[1].trim();
  }
  return kvp;
};

const fieldDetailCheck = (fieldKVP, requiredFields) => {
  let validFieldCount = 0;
  const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  for (let [key, value] of Object.entries(fieldKVP)) {
    if (requiredFields.includes(`${key}:`)) {
      switch (true) {
        case key === `byr`:
          if (parseInt(value) >= 1920 && parseInt(value) <= 2002) {
            validFieldCount++;
          }
          break;
        case key === 'iyr':
          if (parseInt(value) >= 2010 && parseInt(value) <= 2020) {
            validFieldCount++;
          }
          break;
        case key === 'eyr':
          if (value >= parseInt(2020) && parseInt(value) <= 2030) {
            validFieldCount++;
          }
          break;
        case key === 'hgt':
          let height = parseInt(value.replace(/cm/, ''));
          if (value.includes('cm') && height >= 150 && height <= 193) {
            validFieldCount++;
          } else if (value.includes('in') && height >= 59 && height <= 76) {
            validFieldCount++;
          }
          break;
        case key === 'hcl':
          if (/^#[0-9a-f]{6}$/i.test(value)) {
            validFieldCount++;
          }
          break;
        case key === 'ecl':
          eyeColors.forEach((color) => {
            if (color === value) {
              validFieldCount++;
            }
          });
          break;
        case key === 'pid':
          if (/^\d{9}$/.test(value)) {
            validFieldCount++;
          }
          break;
      }
    }
  }
  if (validFieldCount === requiredFields.length) {
    return true;
  } else {
    return false;
  }
};

const closelyCheckListofPassports = (arrayOfPassports, requiredFields) => {
  let validCount = 0;
  let checkNumber = 1;
  arrayOfPassports.forEach((passport) => {
    if (fieldDetailCheck(stringToKeyValuePair(passport), requiredFields)) {
      validCount++;
    }
    // console.log('KVP is:', stringToKeyValuePair(passport), requiredFields);
    checkNumber++;
  });
  return validCount;
};

export {
  checkListOfPassports,
  fieldDetailCheck,
  closelyCheckListofPassports,
  stringToKeyValuePair,
  parsePassportFields,
};
