function throttle(func, interval) {
  let lastExecutionTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecutionTime <= interval) {
      return;
    }
    lastExecutionTime = now;
    return func(...args);
  };
}

module.exports = throttle;
