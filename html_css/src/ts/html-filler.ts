import { Data } from "./models/interface";
import { PrState } from "./models/interface";

export class HtmlFiller {
  selector: string;
  sliderWrap: HTMLElement;
  renderFunc: (el: Data | PrState) => HTMLElement;
  data: Array<Data | PrState>;

  constructor(selector: string, renderFunc: (el: Data | PrState) => HTMLElement, data: Array<Data | PrState>) {
    this.selector = selector
    this.sliderWrap = document.querySelector(this.selector) as HTMLElement;
    this.renderFunc = renderFunc;
    this.data = data;
  }
  
  init() {
      this.data.forEach((element: Data | PrState) => {
        this.sliderWrap.append(this.renderFunc(element));
    });
  }
}
