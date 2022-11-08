export class Storage {
  constructor(data, key) {
    this.data = data;
    this.key = key;
  }

  setSliderData() {
    return !localStorage.getItem(this.key) ? localStorage.setItem(this.key, JSON.stringify(this.data)) : JSON.parse(localStorage.getItem(this.key));
  }
}
