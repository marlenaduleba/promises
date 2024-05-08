/**
 * @jest-environment jsdom
 */

const throttle = require("../throttle");

jest.useFakeTimers();

describe("throttle function", () => {
  it("calls the provided function once when invoked multiple times within the interval", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    // Invoke the throttled function multiple times within the interval
    for (let i = 0; i < 5; i++) {
      throttledFunc();
    }

    // Fast-forward time by 1000 milliseconds
    jest.advanceTimersByTime(1000);

    // The provided function should be called only once
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("calls the provided function again after the interval passes", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    // Invoke the throttled function twice
    throttledFunc();
    throttledFunc();

    // Fast-forward time by 1000 milliseconds
    jest.advanceTimersByTime(1000);

    // The provided function should be called only once
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("calls the provided function immediately if the first invocation happens after the interval", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    // Fast-forward time by 1000 milliseconds
    jest.advanceTimersByTime(1000);

    // Invoke the throttled function
    throttledFunc();

    // The provided function should be called immediately
    expect(func).toHaveBeenCalledTimes(1);
  });
});
