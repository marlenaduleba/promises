/**
 * @jest-environment jsdom
 */

const debounce = require("../debounce");

jest.useFakeTimers();

describe("debounce", () => {
  it("should only execute the function once within the specified delay", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("should handle new arguments in the last call after the delay", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc("first call");
    debouncedFunc("second call");
    debouncedFunc("third call");

    jest.runAllTimers();

    expect(func).toHaveBeenCalledWith("third call");
  });
});
