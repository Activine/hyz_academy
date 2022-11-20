import { Data } from "./models/interface";
import { StorageInt } from "./models/interface";

export class Storage{
  private static singleton: Storage;

  // constructor() {
  //   if(!Storage.singletonnce) singleton = this;
    
  // }

  // setSliderData() {
  //   return !localStorage.getItem(this.key) ? localStorage.setItem(this.key, JSON.stringify(this.data)) : JSON.parse(localStorage.getItem(this.key));
  // }
  public setData(key: string, data: any): void {
    return localStorage.setItem(key, JSON.stringify(data))
  }

  public getData(key: string): Array<Data> | null {
    return localStorage.getItem(key) 
    ? JSON.parse(localStorage.getItem(key))
    : null
  }
}
