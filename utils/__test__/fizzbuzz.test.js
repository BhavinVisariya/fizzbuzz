const fizzbuzz = require('../fizzbuzz');

describe('validation', () => {
  it('returns true if input is positive', () => {
    const isValid = fizzbuzz.validateInput(2);
    expect(isValid).toBe(true);
  });

  it('throws error if input is zero', () => {
    const isValid = () => {
      fizzbuzz.validateInput(0);
    };
    expect(isValid).toThrowError();
  });

  it('throws error if input is negative', () => {
    const isValid = () => {
      fizzbuzz.validateInput(-10);
    };
    expect(isValid).toThrowError();
  });
});

describe('get pattern', () => {
  it('returns an array with length same as input', () => {
    const patternArr = fizzbuzz.getPattern(2);
    expect(patternArr.length).toEqual(2);
  });
  it('returns an array with length 3', () => {
    const patternArr = fizzbuzz.getPattern(5);
    expect(patternArr).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });
});

describe('get Result', () => {
  it('returns Fizz if input is multiple of 3', () => {
    const result = fizzbuzz.getResult(3);
    expect(result).toBe('Fizz');
  });
  it('returns Buzz if input is multiple of 5', () => {
    const result = fizzbuzz.getResult(5);
    expect(result).toBe('Buzz');
  });
  it('returns FizzBuzz if input is multiple of 3 and 5', () => {
    const result = fizzbuzz.getResult(15);
    expect(result).toBe('FizzBuzz');
  });
  it('returns same input if input is neither multiple of 3 or 5 or both', () => {
    const result = fizzbuzz.getResult(1);
    expect(result).toBe(1);
  });
});
