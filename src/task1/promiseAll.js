function promiseAll(promisesArr) {
  return new Promise((resolve, reject) => {
    if (promisesArr.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let completed = 0;

    promisesArr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promisesArr.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// Example od use

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promiseAll(promises)
  .then((results) => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

module.exports = promiseAll;
