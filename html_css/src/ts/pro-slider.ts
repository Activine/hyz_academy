import { OptionSlider } from "./models/interface";

export class ProSlider {
  selector: string;
  sliderContainer: HTMLElement;
  arrow: boolean;
  dots: boolean;
  showSlide: number;
  track: HTMLElement;
  sliderBtns: HTMLElement;
  counter: number;

  constructor(selector: string, options: OptionSlider) {
    this.selector = selector;
    this.sliderContainer = document.querySelector(this.selector) as HTMLElement;
    this.arrow = options.arrow;
    this.dots = options.dots;
    this.showSlide = options.showSlide;
    this.track = document.createElement("div");
    this.sliderBtns = document.createElement("div");
    this.counter = 0;
  }

  addClasses() {
    this.track.className = `slider-track`;
    this.sliderBtns.className = `slider-dots`;
  }

  createDot() {
    let btn = document.createElement("button");
    btn.className = `slider-dot`;

    return btn;
  }

  createSliderDots() {
    this.sliderContainer.append(this.sliderBtns);

    for (let i = 0; i < this.track.children.length; i++) {
      this.sliderBtns.appendChild(this.createDot())
    }
  }

  addActive(el: any) {
    el.disabled = true;
    el.classList.add(`slider-active`);
  }

  removeActive(el: any) {
    el.classList.remove(`slider-active`);
    el.disabled = false;
  }

  createNumDot(el: number) {
    let btn = document.createElement("button");
    btn.className = `slider-dot`;
    btn.textContent = `${el + 1}`;

    return btn;
  }

  createSliderNumDots() {
    let counterDots = 0;

    this.sliderContainer.append(this.sliderBtns);

    Array.from(this.track.children).forEach((el, i) => {
      if (i % 2 === 0) {
        this.sliderBtns.append(this.createNumDot(counterDots));
        counterDots++;
      }
    });
  }

  clickBtn() {
    const allBtns = Array.from(this.sliderBtns.children);

    let offset: number = 0;
    this.addActive(allBtns[0]);

    this.sliderBtns.addEventListener("click", (event: Event) => {
      let index = allBtns.indexOf(event.target as HTMLElement);

      if (index === -1) {
        return;
      }

      const gap: string = window.getComputedStyle(this.track).gap.replace(/[a-z]/gi, "");
      
      if (this.showSlide >= 2) {
        if(index+1 === allBtns.length && window.innerWidth < 768) {
          offset = (-this.track.offsetHeight - +gap) * index;
          this.track.style.transform = `translateY(${offset}px)`;
          this.track.style.maxHeight = '288px';
        } 
        
        else if (window.innerWidth < 768) {
          this.track.style.maxHeight = '596px';
          offset = (-this.track.offsetHeight - +gap) * index;
          this.track.style.transform = `translateY(${offset}px)`;
        }
        
        else {
          this.track.style.maxHeight = '596px';
          offset = (-this.track.offsetWidth - +gap) * index;
          this.track.style.transform = `translateX(${offset}px)`;
        }
      } 
      
      else {
        offset = (-this.track.offsetWidth - +gap) * index;
        this.track.style.transform = `translateX(${offset}px)`;
      }

      allBtns.forEach((el) => this.removeActive(el));
      this.addActive(allBtns[index]);
    });
  }

  updateAfterResize() {
    this.track.style.transform = `translateY(0px)`;
    this.track.style.transform = `translateX(0px)`;

    let allBtns = Array.from(this.sliderBtns.children);

    allBtns.forEach((el) => this.removeActive(el));
    this.addActive(allBtns[0]);
  }

  renderHtml() {
    let arrItems = Array.from(this.sliderContainer.children);

    Array.from(this.sliderContainer.children).forEach((el) => el.remove());

    const list = document.createElement("div");
    list.className = `slider-list`;
    this.sliderContainer.append(list);
    list.append(this.track);

    arrItems.forEach((el) => this.track.append(el));

    if (this.showSlide >= 2 && !this.arrow) {
      this.createSliderNumDots();
    } else if (this.showSlide < 2 && !this.arrow) {
      this.createSliderDots();
    }
  }

  init() {
    this.addClasses();
    this.renderHtml();
    this.clickBtn();
  }
}
