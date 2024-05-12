const { promisify, callbackStyleFunction } = require("../promisify");

describe("promisify", () => {
  it("promisify should transform callback-style function into promise-based one", (done) => {
    const promisedFunction = promisify(callbackStyleFunction);
    promisedFunction(3)
      .then((result) => {
        expect(result).toBe(6);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("promisify should handle errors correctly", (done) => {
    const promisedFunction = promisify(callbackStyleFunction);
    promisedFunction(-1)
      .then((result) => {
        done("Expected promise to be rejected");
      })
      .catch((error) => {
        expect(error).toBe("Invalid value");
        done();
      });
  });
});
