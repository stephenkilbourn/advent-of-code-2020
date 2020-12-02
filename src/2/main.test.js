import { parsePassword, passwordValidation, countValidPasswords } from './main';

const validPasswordStrings = ['1-3 a abcde', '2-9 c: ccccccccc'];
const validPasswords = [
  { min: '1', max: '3', keyLetter: 'a', password: 'abcde' },
  { min: '2', max: '9', keyLetter: 'c', password: 'ccccccccc' },
];

const invalidPasswordStrings = ['1-3 b: cdefg'];
const invalidPasswords = [
  { min: '1', max: '3', keyLetter: 'b', password: 'cdefg' },
  { min: '4', max: '5', keyLetter: 'b', password: 'aabbbefg' },
  { min: '1', max: '1', keyLetter: 'b', password: 'aabbbefg' },
];
describe('check password validation', () => {
  it('should return true for valid passwords', () => {
    validPasswords.forEach((password) => {
      expect(passwordValidation(password)).toBe(true);
    });
  });

  it('should return false for invalid passwords', () => {});
  invalidPasswords.forEach((password) => {
    expect(passwordValidation(password)).toBe(false);
  });
});

describe('check password parsing', () => {
  const passwordString = '1-3 a: abcde';

  it('should return minimum character count', () => {
    expect(parsePassword(passwordString)).toMatchObject({ min: '1' });
  });
  it('should return maximum character count', () => {
    expect(parsePassword(passwordString)).toMatchObject({ max: '3' });
  });
  it('should return keyLetter', () => {
    expect(parsePassword(passwordString)).toMatchObject({ keyLetter: 'a' });
  });

  it('should return the actual password', () => {
    expect(parsePassword(passwordString)).toMatchObject({ password: 'abcde' });
  });
});

describe('correctly count passwords', () => {
  it('should return correct number of valid passwords', () => {
    expect(countValidPasswords(validPasswordStrings)).toBe(2);
  });

  it('should not count invalid passwords', () => {
    expect(countValidPasswords(invalidPasswordStrings)).toBe(0);
  });
});
