export class HtmlFiller {
  constructor(sliderWrap, renderFunc, data, { async }) {
    this.sliderWrap = document.querySelector(`${sliderWrap}`);
    this.renderFunc = renderFunc;
    this.data = data;
    this.async = async;
  }


  
  async init() {
    if (this.async) {
      let state = await this.data

      state.forEach((element) => {
          this.sliderWrap.append(this.renderFunc(element));
      });
      
      console.log(Array.from(this.sliderWrap.children));
    }
    
    if (!this.async) {
      this.data.forEach((element) => {
        this.sliderWrap.append(this.renderFunc(element));
    });
    }
    // console.log(this.data);
  }
}
