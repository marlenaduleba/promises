function promiseAllSettled(promisesArr) {
  return new Promise((resolve) => {
    if (promisesArr.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let settled = 0;
    promisesArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
          settled++;
        })
        .catch((error) => {
          results[index] = { status: "rejected", reason: error };
          settled++;
        })
        .finally(() => {
          if (settled === results.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example od use

const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3),
];

promiseAllSettled(promises).then((results) => {
  console.log("All promises settled:", results);
  // Expected: [{ status: 'fulfilled', value: 1 },
  //            { status: 'rejected', reason: 'Error occurred' },
  //            { status: 'fulfilled', value: 3 }]
});

module.exports = promiseAllSettled;
