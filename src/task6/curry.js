function curry(func, arity = func.length) {
  const placeholder = curry.placeholder;

  function nextCurried(prevArgs) {
    return function (...nextArgs) {
      let args = [];
      let nextIndex = 0;
      for (let arg of prevArgs) {
        if (arg === placeholder && nextIndex < nextArgs.length) {
          args.push(nextArgs[nextIndex++]);
        } else {
          args.push(arg);
        }
      }
      args = args.concat(nextArgs.slice(nextIndex));

      if (args.length >= arity && !args.includes(placeholder)) {
        return func(...args);
      } else {
        return nextCurried(args);
      }
    };
  }
  return nextCurried([]);
}

curry.placeholder = Symbol();

module.exports = curry;
