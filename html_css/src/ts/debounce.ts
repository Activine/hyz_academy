export function debounce(func: () => void, wait: number, immediate: boolean) {
    let timeout: any;
  
    return function executedFunction(): void {
      const context = this;
      const args: IArguments = arguments;
        
      const later = function(): void {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      const callNow: boolean = immediate && !timeout;
    
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
    
      if (callNow) func.apply(context, args);
    };
  };