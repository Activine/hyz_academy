import { Data } from "./models/interface";
import { StorageInt } from "./models/interface";

export class Storage implements StorageInt{
  private static instance: Storage;

  public static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }

    return Storage.instance;
  }

  public setData(key: string, data: any): void {
    return localStorage.setItem(key, JSON.stringify(data))
  }

  public getData(key: string): Array<Data> | null {
    return localStorage.getItem(key) 
    ? JSON.parse(localStorage.getItem(key))
    : null
  }
}
