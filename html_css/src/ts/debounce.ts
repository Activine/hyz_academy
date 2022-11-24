export function debounce(func: () => any, wait: number, immediate: boolean): () => any {
  let timeout: ReturnType<typeof setTimeout>;

  return function(...args: Array<any>): void {
    if(immediate && !timeout) {
      return func.apply(this, args)
    }

    clearTimeout(timeout);

    timeout = setTimeout((): void => {
      timeout = null;
      func.apply(this, args);
    }, wait)
  }
};