const promiseAllSettled = require("../promiseAllSettled");

describe("promiseAllSettled function", () => {
  it("should resolve with an array of objects representing the settlement of each promise", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject("Error occurred"),
      Promise.resolve(3),
    ];

    const result = await promiseAllSettled(promises);

    expect(result).toEqual([
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: "Error occurred" },
      { status: "fulfilled", value: 3 },
    ]);
  });

  it("should resolve with an empty array for an empty array of promises", async () => {
    const result = await promiseAllSettled([]);
    expect(result).toEqual([]);
  });

  it("should resolve with an array of objects representing the settlement of each promise even if some are not promises", async () => {
    const promises = [Promise.resolve(1), 2, Promise.resolve(3)];

    const result = await promiseAllSettled(promises);

    expect(result).toEqual([
      { status: "fulfilled", value: 1 },
      { status: "fulfilled", value: 2 },
      { status: "fulfilled", value: 3 },
    ]);
  });
});
