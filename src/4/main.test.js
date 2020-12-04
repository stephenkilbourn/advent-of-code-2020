import {
  fieldDetailCheck,
  stringToKeyValuePair,
  parsePassportFields,
  checkListOfPassports,
  closelyCheckListofPassports,
} from './main.js';

const passportFields = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];

const passport =
  'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm';

const passportKVP = {
  byr: '1937',
  cid: '147',
  ecl: 'gry',
  eyr: '2020',
  hcl: '#fffffd',
  hgt: '183cm',
  iyr: '2017',
  pid: '860033327',
};

const passportArray = [
  'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm',
  'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929',
  'hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm',
  'hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in',
];

describe('test parsing string to key value pair', () => {
  it('should match', () => {
    expect(stringToKeyValuePair(passport)).toStrictEqual(passportKVP);
  });
});
describe('test conditions of field details', () => {
  it('should return true for a good passport', () => {
    expect(fieldDetailCheck(passportKVP, passportFields)).toBe(true);
  });

  it('should return fail for a birth year too old', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, byr: '1919' }, passportFields)
    ).toBe(false);
  });

  it('should return fail for a birth year too young', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, byr: '2003' }, passportFields)
    ).toBe(false);
  });

  it('should return fail for a issue year too old', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, iyr: '2009' }, passportFields)
    ).toBe(false);
  });
  it('should return fail for a issue year too young', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, iyr: '2021' }, passportFields)
    ).toBe(false);
  });

  it('should return fail for a exp year too old', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, eyr: '2019' }, passportFields)
    ).toBe(false);
  });

  it('should return fail for a exp year too young', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, eyr: '2031' }, passportFields)
    ).toBe(false);
  });

  it('should return fail for hight without cm or in', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hgt: '150' }, passportFields)
    ).toBe(false);
  });
  it('should return fail for hight with cm too low', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hgt: '149cm' }, passportFields)
    ).toBe(false);
  });
  it('should return fail for hight with cm too high', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hgt: '194cm' }, passportFields)
    ).toBe(false);
  });

  it('should return fail for hight with in too low', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hgt: '58in' }, passportFields)
    ).toBe(false);
  });
  it('should return fail for hight with in too high', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hgt: '77in' }, passportFields)
    ).toBe(false);
  });

  it('should return true for hight with inches in range', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hgt: '70in' }, passportFields)
    ).toBe(true);
  });

  it('should return fail for hair color without in #', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hcl: 'fffffd' }, passportFields)
    ).toBe(false);
  });
  it('should return fail for hair color with too many digits in #', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, hcl: '#gfffffd' }, passportFields)
    ).toBe(false);
  });
  it('should return fail for more than one eye color', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, ecl: 'amb, blu' }, passportFields)
    ).toBe(false);
  });

  it('should return passport id with too many digits in #', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, pid: '0123456789' }, passportFields)
    ).toBe(false);
  });

  it('should return passport id with too few digits in #', () => {
    expect(
      fieldDetailCheck({ ...passportKVP, pid: '0123' }, passportFields)
    ).toBe(false);
  });
});

describe('check parse passport for part 1', () => {
  const expectedFields = [
    'byr:',
    'iyr:',
    'eyr:',
    'hgt:',
    'hcl:',
    'ecl:',
    'pid:',
  ];
  const testPasswordString =
    'ecl:gry pid:860033327 eyr:2020 \nhcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm';
  const badPasswordString =
    'ecl:gry pid:860033327 eyr:2020 \nhcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm';
  it('should return true if all fields are present', () => {
    expect(parsePassportFields(testPasswordString, expectedFields)).toBe(true);
  });

  it('should return false if a field is missing', () => {
    expect(
      parsePassportFields(
        testPasswordString.replace('hgt:183cm', ''),
        expectedFields
      )
    ).toBe(false);
  });
});

describe('test checkListOfPassports', () => {
  it('returns count if multiple passwords are valid', () => {
    expect(checkListOfPassports(passportArray, passportFields)).toBe(2);
  });
});

describe('test counting passports after close inspection', () => {
  expect(closelyCheckListofPassports(passportArray, passportFields)).toBe(2);
});
