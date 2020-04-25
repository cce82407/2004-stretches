const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('a', 'b')).toThrow();

    expect(() => multiply('_', "@")).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    const result = multiply(5,3)
    expect(result).toBe(15);

    // // test that the returned value is correct
    // expect(multiply(9,7)).toBe(63);

    // // test some other values
    // expect(multiply(10,9)).toBe(90);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const rn1 = Math.random()
    const rn2 = Math.random()
    const nh = multiply (rn1, rn2)
    expect(nh).toBe(rn1*rn2)
    // test some random values
  });
});
