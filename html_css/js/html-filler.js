export class HtmlFiller {
  constructor(sliderWrap, renderFunc, data) {
    this.sliderWrap = document.querySelector(`${sliderWrap}`);
    this.renderFunc = renderFunc;
    this.data = data;
    // this.selector.className = `${selector.replace(/[#]/gi, "")}`;
  }

  init() {
    // const list = document.createElement("div");
    // list.className = `${this.selector.className}-wrap`;
    // this.selector.append(list);
    // const wrap = document.createElement("div");
    // wrap.className = `slider-wrap`;
    // this.sliderWrap.append(wrap);
    this.data.forEach((element) => {
        this.sliderWrap.append(this.renderFunc(element));
    });
  }
}
