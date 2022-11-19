import { Data } from "./models/interface";

export class Storage {
  data: Array<Data>;
  key: string;

  constructor(data: Array<Data>, key: string) {
    this.data = data;
    this.key = key;
  }

  setSliderData(){
    return !localStorage.getItem(this.key) ? localStorage.setItem(this.key, JSON.stringify(this.data)) : JSON.parse(localStorage.getItem(this.key) as any);
  }
}
