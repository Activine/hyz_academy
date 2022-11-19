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
  offset: number;

  constructor(selector: string, options: OptionSlider) {
    this.selector = selector;
    this.sliderContainer = document.querySelector(this.selector) as HTMLElement;
    this.arrow = options.arrow;
    this.dots = options.dots;
    this.showSlide = options.showSlide;
    this.track = document.createElement("div");
    this.sliderBtns = document.createElement("div");
    this.counter = 0;
    this.offset = 0;
  }

  addClasses(): void {
    this.track.className = `slider-track`;
    this.sliderBtns.className = `slider-dots`;
  }

  createDot(): HTMLButtonElement {
    let btn = document.createElement("button") as HTMLButtonElement;
    btn.className = `slider-dot`;

    return btn;
  }

  createSliderDots(): void {
    this.sliderContainer.append(this.sliderBtns);

    for (let i = 0; i < this.track.children.length; i++) {
      this.sliderBtns.appendChild(this.createDot())
    }
  }

  addActive(el: HTMLButtonElement) {
    el.disabled = true;
    el.classList.add(`slider-active`);
  }

  removeActive(el: HTMLButtonElement) {
    el.classList.remove(`slider-active`);
    el.disabled = false;
  }

  removeAllActive(): void {
    let allBtns = Array.from(this.sliderBtns.children) as Array<HTMLButtonElement>;
    allBtns.forEach((el: HTMLButtonElement) => this.removeActive(el));
  }

  createNumDot(el: number): HTMLButtonElement {
    let btn = document.createElement("button") as HTMLButtonElement;
    btn.className = `slider-dot`;
    btn.textContent = `${el + 1}`;

    return btn;
  }

  createSliderNumDots(): void {
    let counterDots: number = 0;

    this.sliderContainer.append(this.sliderBtns);

    Array.from(this.track.children).forEach((el, i: number) => {
      if (i % 2 === 0) {
        this.sliderBtns.append(this.createNumDot(counterDots));
        counterDots++;
      }
    });
  }

  handleClick(): void {
    const allBtns = Array.from(this.sliderBtns.children) as Array<HTMLButtonElement>;

    this.addActive(allBtns[0]);

    this.sliderBtns.addEventListener("click", (event: Event) => {
      let index: number = allBtns.indexOf(event.target as HTMLButtonElement);
      const gap: string = window.getComputedStyle(this.track).gap.replace(/[a-z]/gi, "");

      if (index === -1) { return };
      
      switch(true) {
        case(this.showSlide < 2): {
          this.offset = (-this.track.offsetWidth - +gap) * index;
          this.track.style.transform = `translateX(${this.offset}px)`;
        } break;

        case(index+1 === allBtns.length && window.innerWidth < 768): {
          this.offset = (-this.track.offsetHeight - +gap) * index;
          this.track.style.transform = `translateY(${this.offset}px)`;
          this.track.style.maxHeight = '288px';
        } break;

        case(window.innerWidth < 768): {
          this.track.style.maxHeight = '596px';
          this.offset = (-this.track.offsetHeight - +gap) * index;
          this.track.style.transform = `translateY(${this.offset}px)`;
        } break;

        default: {
          this.track.style.maxHeight = '596px';
          this.offset = (-this.track.offsetWidth - +gap) * index;
          this.track.style.transform = `translateX(${this.offset}px)`;
        }
      }

      this.removeAllActive();
      this.addActive(allBtns[index]);
    });
  }

  updateAfterResize(): void {
    this.track.style.transform = `translateY(0px)`;
    this.track.style.transform = `translateX(0px)`;

    let allBtns = Array.from(this.sliderBtns.children) as Array<HTMLButtonElement>;

    this.removeAllActive();
    this.addActive(allBtns[0]);
  }

  renderHtml(): void {
    let arrItems = Array.from(this.sliderContainer.children) as Array<HTMLButtonElement>;

    Array.from(this.sliderContainer.children).forEach((el: HTMLElement) => el.remove());

    const list = document.createElement("div") as HTMLElement;
    list.className = `slider-list`;
    this.sliderContainer.append(list);
    list.append(this.track);

    arrItems.forEach((el: HTMLButtonElement) => this.track.append(el));

    if (this.showSlide >= 2 && !this.arrow) {
      this.createSliderNumDots();
    } else if (this.showSlide < 2 && !this.arrow) {
      this.createSliderDots();
    }
  }

  init(): void {
    this.addClasses();
    this.renderHtml();
    this.handleClick();
  }
}
