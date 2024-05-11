const promiseAll = require("../promiseAll");

describe("promiseAll function", () => {
  it("should resolve with an empty array for an empty array of promises", async () => {
    const promises = [];
    const result = await promiseAll(promises);
    expect(result).toEqual([]);
  });

  it("should resolve with an array of resolved values for an array of promises with different values", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve("two"),
      Promise.resolve(true),
    ];
    const result = await promiseAll(promises);
    expect(result).toEqual([1, "two", true]);
  });

  it("should resolve with an array of resolved values for an array of promises with different delays", async () => {
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve(1), 300)),
      new Promise((resolve) => setTimeout(() => resolve("two"), 100)),
      new Promise((resolve) => setTimeout(() => resolve(true), 200)),
    ];
    const result = await promiseAll(promises);
    expect(result).toEqual([1, "two", true]);
  });

  it("should reject with the reason of the first rejected promise", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject("Error occurred"),
      Promise.resolve(true),
    ];
    await expect(promiseAll(promises)).rejects.toEqual("Error occurred");
  });
});
