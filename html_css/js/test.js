export class Test {
  constructor(sliderContainer) {
    this.sliderContainer = document.querySelector(`${sliderContainer}`);
    this.track = document.createElement("div");
    // this.data = data;
    this.offset = 0;
    // this.rendItem = rendItem;
    this.list = document.createElement("div");
    this.track = document.createElement("div");
  }
  //проблема появляется вот здесь...
  //я не могу достучаться к дочерним элементам которые появляются асинхронно
  //по примеру слика я должен создать для них обертку и перерисовывать при выборе селекта(
  renderHtml() {
    console.log(Array.from(this.sliderContainer.children));
  }

  init() {
    this.renderHtml()
  }
}
