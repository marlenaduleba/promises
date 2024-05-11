const chainPromises = require("../chainPromises");

describe("chainPromises function", () => {
  it("should resolve with the correct result when all promises resolve", async () => {
    function asyncFunction1() {
      return Promise.resolve("Result from asyncFunction1");
    }

    function asyncFunction2(data) {
      return Promise.resolve(data + " - Result from asyncFunction2");
    }

    function asyncFunction3(data) {
      return Promise.resolve(data + " - Result from asyncFunction3");
    }

    const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

    const result = await chainPromises(functionsArray);
    expect(result).toEqual(
      "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    );
  });

  it("should reject with the reason of the first rejected promise", async () => {
    function asyncFunction1() {
      return Promise.resolve("Result from asyncFunction1");
    }

    function asyncFunction2(data) {
      return Promise.reject("Error occurred in asyncFunction2");
    }

    function asyncFunction3(data) {
      return Promise.resolve(data + " - Result from asyncFunction3");
    }

    const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

    await expect(chainPromises(functionsArray)).rejects.toEqual(
      "Error occurred in asyncFunction2"
    );
  });

  it("should handle an empty array of functions", async () => {
    const result = await chainPromises([]);
    expect(result).toEqual(undefined);
  });

  it("should handle functions returning synchronous values", async () => {
    function syncFunction1() {
      return "Result from syncFunction1";
    }

    function syncFunction2(data) {
      return data + " - Result from syncFunction2";
    }

    function syncFunction3(data) {
      return data + " - Result from syncFunction3";
    }

    const functionsArray = [syncFunction1, syncFunction2, syncFunction3];

    const result = await chainPromises(functionsArray);
    expect(result).toEqual(
      "Result from syncFunction1 - Result from syncFunction2 - Result from syncFunction3"
    );
  });
});
