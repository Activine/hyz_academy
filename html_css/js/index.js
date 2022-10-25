import { data } from "./data.js";
import { Slider } from "./slider.js";
import { SliderBlog } from "./slider-blog.js";
import { scrollApp, burger } from "./mobile-menu.js";
import { SliderPref } from "./slider-prefer.js";
import { Storage } from "./storage.js";

class App {
  constructor() {
    scrollApp();
    burger("nav__close", "hamburger-lines", "nav__list", "nav__link");

    let storage = new Storage(data, "dataSlider");

    let custSlider = new Slider("customers__slider", storage.setSliderData());
    custSlider.init();

    let blogSlider = new SliderBlog("blog__slider", storage.setSliderData());
    blogSlider.init();

    let prefSlider = new SliderPref("prefer__slider");
    prefSlider.init();
  }
}

new App();