import { data } from "./data";
import { scrollApp, createBurger } from "./mobile-menu";
import { Storage } from "./storage";
import { HtmlFiller } from "./html-filler";
import { ProSlider } from "./pro-slider";
import {
  renderItemCust,
  renderItemBlog,
  renderItemPref,
} from "./html-filler.mapper";
import { initForm } from "./form";
import { getData } from "./api-data";
import { Select } from "./select";
import { Pr } from "./pr";
import { debounce } from "./debounce"
import './slick-slider'

export class App {
  prsl: HTMLElement;
  storage: Storage;

  constructor() {
    scrollApp();
    createBurger();
    this.storage = new Storage(data, "dataSlider");
    this.prsl = document.querySelector(`#prefer__slider`) as HTMLElement;
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

    let select = document.querySelector(".select") as HTMLSelectElement;

    select.addEventListener("change", (event: Event) => {
      this.prsl.innerHTML = "";
      this.createPrefSlider(+(event.target as HTMLInputElement).value)
    });

    return { custItems, blogItems };
  }
  
  createPrefSlider(id: number): void {
    this.prsl.innerHTML = "";

    getData(id).then((res) => {
      let prefSl = new HtmlFiller("#prefer__slider", renderItemPref, res);
      prefSl.init();

      let prefSlider = new Pr("#prefer__slider");
      prefSlider.init();
    });
  }

  createSelect(): void {
    let select = new Select("#prefer__slider", 3);
    select.init();
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
    }, 250, false);

    window.addEventListener("resize", returnedFunction);
  }
}

