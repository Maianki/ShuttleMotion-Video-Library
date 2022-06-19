export const throttle = (callback, delay = 1000) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      callback.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
