import { Data } from "./models/interface";

export class HtmlFiller {
  selector: string;
  sliderWrap: HTMLElement;
  renderFunc: (el: Data) => HTMLElement;
  data: Array<Data>;

  constructor(selector: string, renderFunc: (el: Data) => HTMLElement, data: Array<Data>) {
    this.selector = selector
    this.sliderWrap = document.querySelector(this.selector) as HTMLElement;
    this.renderFunc = renderFunc;
    this.data = data;
  }
  
  init() {
      this.data.forEach((element: Data) => {
        this.sliderWrap.append(this.renderFunc(element));
    });
  }
}
