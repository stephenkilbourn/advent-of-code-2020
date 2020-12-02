import {
  parseSledPassword,
  parseTobagganPassword,
  sledPasswordValidation,
  countValidSledPasswords,
  tobagganPasswordValidation,
  countValidTobogganPasswords,
} from './main';

describe('test for part 1, Sled way', () => {
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

  describe('check password parsing', () => {
    const passwordString = '1-3 a: abcde';

    it('should return minimum character count', () => {
      expect(parseSledPassword(passwordString)).toMatchObject({ min: '1' });
    });
    it('should return maximum character count', () => {
      expect(parseSledPassword(passwordString)).toMatchObject({ max: '3' });
    });
    it('should return keyLetter', () => {
      expect(parseSledPassword(passwordString)).toMatchObject({
        keyLetter: 'a',
      });
    });
    it('should return the actual password', () => {
      expect(parseSledPassword(passwordString)).toMatchObject({
        password: 'abcde',
      });
    });
  });
  describe('check password validation', () => {
    it('should return true for valid passwords', () => {
      validPasswords.forEach((password) => {
        expect(sledPasswordValidation(password)).toBe(true);
      });
    });

    it('should return false for invalid passwords', () => {});
    invalidPasswords.forEach((password) => {
      expect(sledPasswordValidation(password)).toBe(false);
    });
  });

  describe('correctly count passwords', () => {
    it('should return correct number of valid passwords', () => {
      expect(countValidSledPasswords(validPasswordStrings)).toBe(2);
    });

    it('should not count invalid passwords', () => {
      expect(countValidSledPasswords(invalidPasswordStrings)).toBe(0);
    });
  });
});

describe('test for part 2: Tobaggan way', () => {
  const validPasswordStrings = ['1-3 a abcde'];
  const invalidPasswordStrings = ['1-3 b: cdefg', '2-9 c: ccccccccc', ];

  const validPasswords = [
    { position1: '1', position1: '3', keyLetter: 'a', password: 'abcde' },
  ];

  const invalidPasswords = [
    { position1: '1', position2: '3', keyLetter: 'b', password: 'cdefg' },
    { position1: '2', position2: '9', keyLetter: 'c', password: 'ccccccccc' },
  ];
  describe('check password parsing', () => {
    const passwordString = '1-3 a: abcde';

    it('should return position #1', () => {
      expect(parseTobagganPassword(passwordString)).toMatchObject({
        position1: '1',
      });
    });
    it('should return position #2', () => {
      expect(parseTobagganPassword(passwordString)).toMatchObject({
        position2: '3',
      });
    });
    it('should return keyLetter', () => {
      expect(parseTobagganPassword(passwordString)).toMatchObject({
        keyLetter: 'a',
      });
    });
    it('should return the actual password', () => {
      expect(parseTobagganPassword(passwordString)).toMatchObject({
        password: 'abcde',
      });
    });
  });

  describe('check password validation', () => {
    it('should return true for valid passwords', () => {
      validPasswords.forEach((password) => {
        expect(tobagganPasswordValidation(password)).toBe(true);
      });
    });

    it('should return false for invalid passwords', () => {});
    invalidPasswords.forEach((password) => {
      expect(tobagganPasswordValidation(password)).toBe(false);
    });
  });

  describe('correctly count passwords', () => {
    it('should return correct number of valid passwords', () => {
      expect(countValidTobogganPasswords(validPasswordStrings)).toBe(1);
    });

    it('should not count invalid passwords', () => {
      expect(countValidTobogganPasswords(invalidPasswordStrings)).toBe(0);
    });
  });

});
