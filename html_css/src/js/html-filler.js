export class HtmlFiller {
  constructor(sliderWrap, renderFunc, data) {
    this.sliderWrap = document.querySelector(`${sliderWrap}`);
    this.renderFunc = renderFunc;
    this.data = data;
    // this.async = async;
    // this.selector.className = `${selector.replace(/[#]/gi, "")}`;
  }


  
  init() {
    // const list = document.createElement("div");
    // list.className = `${this.selector.className}-wrap`;
    // this.selector.append(list);
    // const wrap = document.createElement("div");
    // wrap.className = `slider-wrap`;
    // this.sliderWrap.append(wrap);
    // if (this.async) {
    //   let c = await this.data.then(data => data.json())
    //   // console.log(c.splice(0,10));
    //   c.splice(0,10).forEach((element) => {
    //       this.sliderWrap.append(this.renderFunc(element));
    //   });
    // }
    
    // if (!this.async) {
      this.data.forEach((element) => {
        this.sliderWrap.append(this.renderFunc(element));
    });
    // }
    // console.log(this.data);
  }
}
