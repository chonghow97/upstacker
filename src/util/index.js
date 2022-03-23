export const isIos = Platform.OS === 'ios';

export const debounce = (func, timeout = 300) => {
  //src: https://www.freecodecamp.org/news/javascript-debounce-example/
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
