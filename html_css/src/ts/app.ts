import { data } from "./data";
import { scrollApp, createBurger } from "./mobile-menu";
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
import { debounce } from "./debounce";
import { AppAbstract } from "./models/abstract";
import { ReadOnly } from "./decorators/readOnly.decorator";
import { Storage } from "./models/interface";
import './slick-slider';
import { UserStorage } from "./storage";

export class App extends AppAbstract {
  private prsl: HTMLElement;

  constructor() {
    super();
    scrollApp();
    createBurger();
    this.storage = UserStorage.getInstance();
    console.log(this.storage);
    
    this.prsl = document.querySelector(`#prefer__slider`) as HTMLElement;
  }

  @ReadOnly(true)
  public init(): void {
    this.createSelect();
    let { custSlider, blogSlider }: { custSlider: ProSlider; blogSlider: ProSlider } = this.createSliders();

    initForm();

    const returnedFunction: () => void = debounce(function () {
      blogSlider.updateAfterResize();
      custSlider.updateAfterResize();
    }, 250, false);

    window.addEventListener("resize", returnedFunction);
  }

  private createHtml(): { custItems: HtmlFiller; blogItems: HtmlFiller } {
    let custItems: HtmlFiller = new HtmlFiller(
      "#customers__slider",
      renderItemCust,
      this.storage.getData("dataSlider"),
    );
    custItems.init();

    let blogItems: HtmlFiller = new HtmlFiller(
      "#blog__slider",
      renderItemBlog,
      this.storage.getData("dataSlider"),
    );
    blogItems.init();

    let select: HTMLSelectElement = document.querySelector(".select");

    select.addEventListener("change", (event: Event) => {
      this.prsl.innerHTML = "";
      this.createPrefSlider(+(event.target as HTMLInputElement).value);
    });

    return { custItems, blogItems };
  }

  private createPrefSlider(id: number): void {
    this.prsl.innerHTML = "";

    getData(id, this.baseUrl).then((res) => {
      let prefSl: HtmlFiller = new HtmlFiller("#prefer__slider", renderItemPref, res);
      prefSl.init();

      let prefSlider: Pr = new Pr("#prefer__slider");
      prefSlider.init();
    });
  }

  private createSelect(): void {
    let select: Select = new Select("#prefer__slider", 3);
    select.init();
  }

  private createSliders(): { custSlider: ProSlider; blogSlider: ProSlider } {
    this.createHtml();

    let custSlider: ProSlider = new ProSlider("#customers__slider", {
      arrow: false,
      dots: true,
      showSlide: 1,
    });
    custSlider.init();

    let blogSlider: ProSlider = new ProSlider("#blog__slider", {
      arrow: false,
      dots: true,
      showSlide: 2,
    });
    blogSlider.init();

    this.createPrefSlider(1);
    return { custSlider, blogSlider };
  }
}