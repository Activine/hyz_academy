import { data } from "./data.js";
import { scrollApp, createBurger } from "./mobile-menu.js";
import { Storage } from "./storage.js";
import { HtmlFiller } from "./html-filler.js";
import { ProSlider } from "./pro-slider.js";
import {
  renderItemCust,
  renderItemBlog,
  renderItemPref,
} from "./html-filler.mapper.js";
import { initForm } from "./form.js";
import { getData } from "./api-data.js";
import { Select } from "./select.js";
import { Pr } from "./pr.js";
import { debounce } from './debounce.js'

class App {
  constructor() {
    scrollApp();
    createBurger();
    this.storage = new Storage(data, "dataSlider");
    this.prsl = document.querySelector(`#prefer__slider`);
  }

  createHtml() {
    let custItems = new HtmlFiller(
      "#customers__slider",
      renderItemCust,
      this.storage.setSliderData()
    );
    custItems.init();

    let blogItems = new HtmlFiller(
      "#blog__slider",
      renderItemBlog,
      this.storage.setSliderData()
    );
    blogItems.init();

    let select = document.querySelector(".select");

    select.addEventListener("change", (event) => {
      this.prsl.innerHTML = "";
      this.createPrefSlider(event.target.value)
    });

    return { custItems, blogItems };
  }

  createSelect() {
    let select = new Select("#prefer__slider", 3);
    select.init();
  }

  createPrefSlider(id) {
    this.prsl.innerHTML = "";

    getData(id).then((res) => {
      let prefSl = new HtmlFiller("#prefer__slider", renderItemPref, res);
      prefSl.init();

      let prefSlider = new Pr("#prefer__slider");
      prefSlider.init();
    });
  }

  createSliders() {
    this.createHtml();

    let custSlider = new ProSlider("#customers__slider", {
      arrow: false,
      dots: true,
      showSlide: 1,
    });
    custSlider.init();

    let blogSlider = new ProSlider("#blog__slider", {
      arrow: false,
      dots: true,
      showSlide: 2,
    });
    blogSlider.init();

    this.createPrefSlider(1);
    return { custSlider, blogSlider};
  }

  init() {
    this.createSelect();
    let { custSlider, blogSlider} = this.createSliders();
    initForm();

    const returnedFunction = debounce(function() {
      blogSlider.updateAfterResize();
      custSlider.updateAfterResize();
    }, 250);

    window.addEventListener("resize", returnedFunction);
  }
}

new App().init();
