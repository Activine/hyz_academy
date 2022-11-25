import { Data } from "../models/interface";

export function localSt(keyData: string) {
  return function (target: Object, key: string) {
    const getData = () => {
      return localStorage.getItem(keyData)
        ? JSON.parse(localStorage.getItem(keyData))
        : null
    };

    const setData = (data: Array<Data>) => {
      localStorage.setItem(keyData, JSON.stringify(data))
    };

    Object.defineProperty(target, key, {
      get: getData,
      set: setData,
    });
  }
}

