import { Data } from "../models/interface";

export function sessionSt(keyData: string) {
  return function (target: Object, key: string) {
    const getData = () => {
      return sessionStorage.getItem(keyData)
        ? JSON.parse(sessionStorage.getItem(keyData))
        : null
    };

    const setData = (data: Array<Data>) => {
      sessionStorage.setItem(keyData, JSON.stringify(data))
    };

    Object.defineProperty(target, key, {
      get: getData,
      set: setData,
      configurable: true,
    });
  }
}

