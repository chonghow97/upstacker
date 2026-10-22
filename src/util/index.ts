// export const isIos = Platform.OS === 'ios';

export const debounce = <Args extends unknown[]>(
  func: (...args: Args) => void,
  timeout = 300,
) => {
  // src: https://www.freecodecamp.org/news/javascript-debounce-example/
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
