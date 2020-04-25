const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('a', 'b')).toThrow(Error);

    expect(() => multiply('_', "@")).toThrow(Error);
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(85,19)).toBe(1615);

    // test that the returned value is correct
    expect(multiply(9,7)).toBe(63);

    // test some other values
    expect(multiply(10,9)).toBe(90);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
  });
});
