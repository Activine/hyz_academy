import { data } from "./data.js";
import { scrollApp, createBurger } from "./mobile-menu.js";
import { Storage } from "./storage.js";
import { HtmlFiller } from "./html-filler.js";
import { ProSlider } from "./pro-slider.js";
import { renderItemCust, renderItemBlog, renderItemPref, createSelect } from './html-filler.mapper.js'
import { PreferSlider } from './prefer-slider.js' 
import { initForm } from './form.js'
import { getData } from './api-data.js'
import { Test } from './test.js'

class App {
  constructor() {
    scrollApp();
    createBurger();
    this.storage = new Storage(data, "dataSlider");
  }

  createHtml() {
    let custItems = new HtmlFiller("#customers__slider", renderItemCust, this.storage.setSliderData(), {async: false});
    custItems.init();

    let blogItems = new HtmlFiller("#blog__slider", renderItemBlog, this.storage.setSliderData(), {async: false});
    blogItems.init();

    let prefSl = new HtmlFiller("#prefer__slider", renderItemPref, getData(1), {async: true})
    prefSl.init()

    return { custItems, blogItems, }
  }

  createSliders() {
    this.createHtml()

    let custSlider = new ProSlider("#customers__slider", {arrow: false, dots: true, showSlide: 1});
    custSlider.init();

    let blogSlider = new ProSlider("#blog__slider", {arrow: false, dots: true, showSlide: 2});
    blogSlider.init();

    let select = document.getElementById('prefer__slider');
    select.before(createSelect(3))
    
    let prefSlider = new Test('#prefer__slider')
    prefSlider.init()

    // let prefSlider = new PreferSlider("#prefer__slider", getData, renderItemPref);
    // prefSlider.init() 

    return { custSlider, blogSlider }
  }

  init() {
    let {custSlider, blogSlider} = this.createSliders();
    initForm()
    window.addEventListener("resize", function () {
      blogSlider.updateAfterResize();
      custSlider.updateAfterResize();
    });
  }
}

new App().init();