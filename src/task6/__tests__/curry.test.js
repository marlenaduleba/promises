const curry = require("../curry");

describe("curry with placeholders", () => {
  function multiply(a, b, c) {
    return a * b * c;
  }
  const curriedMultiply = curry(multiply);
  const _ = curry.placeholder;

  test("curries a function and allows for partial application", () => {
    expect(curriedMultiply(2)(3)(4)).toBe(24);
  });

  test("allows for skipping arguments using a placeholder", () => {
    const multiplyByTwo = curriedMultiply(2);
    expect(multiplyByTwo(_, 3)(4)).toBe(24);
    expect(multiplyByTwo(3, _)(4)).toBe(24);
  });

  test("handles multiple placeholders correctly", () => {
    expect(curriedMultiply(_, _, 4)(2)(3)).toBe(24);
    expect(curriedMultiply(_, 3, _)(2)(4)).toBe(24);
    expect(curriedMultiply(_, _, _)(2)(3)(4)).toBe(24);
  });

  test("handles more complex combinations of arguments and placeholders", () => {
    const partApplied = curriedMultiply(2, _, _);
    expect(partApplied(_, 3)(4)).toBe(24);
    expect(partApplied(3, _)(4)).toBe(24);
    expect(partApplied(_, 4)(3)).toBe(24);
  });
});
