export class ProSlider {
  constructor(selector, { arrow, dots, showSlide }) {
    this.selector = document.querySelector(`${selector}`);
    this.arrow = arrow;
    this.dots = dots;
    this.showSlide = showSlide;
    this.selector.className = `${selector.replace(/[#]/gi, "")}`;
    this.offset = 0;
  }

  createDot() {
    let btn = document.createElement("button");
    btn.className = `${this.selector.className}-dot`;

    return btn;
  }

  createSliderDots() {
    let sliderBtns = document.createElement("div");
    sliderBtns.className = `${this.selector.className}-dots`;
    this.selector.append(sliderBtns);

    let items = document.querySelector(`.${this.selector.className}-line`);

    for (let i = 0; i < items.children.length; i++) {
      sliderBtns.append(this.createDot());
    }
  }

  addActive(el) {
    el.disabled = true;
    el.classList.add(`${this.selector.className}-active`);
  }

  removeActive(el) {
    el.classList.remove(`${this.selector.className}-active`);
    el.disabled = false;
  }

  createNumDot(el) {
    let btn = document.createElement("button");
    btn.className = `${this.selector.className}-dot`;
    btn.textContent = `${el + 1}`;

    return btn;
  }

  createSliderNumDots() {
    let sliderBtns = document.createElement("div");
    sliderBtns.className = `${this.selector.className}-dots`;
    let counterDots = 0;

    this.selector.append(sliderBtns);

    let items = document.querySelector(`.${this.selector.className}-line`);
    Array.from(items.children).forEach((el, i) => {
      if (i % 2 === 0) {
        console.log();
        sliderBtns.append(this.createNumDot(counterDots));
        counterDots++;
      }
    });
  }

  clickBtn() {
    let allBtn = document.querySelector(`.${this.selector.className}-dots`);
    let allBtns = Array.from(
      document.querySelectorAll(`.${this.selector.className}-dot`)
    );
    let line = document.querySelector(`.${this.selector.className}-line`);

    this.addActive(allBtns[0]);
    line.style.transform = `translateY(0px)`;
    line.style.transform = `translateX(0px)`;
    allBtn.addEventListener("click", (event) => {
      let index = allBtns.indexOf(event.target);

      if (index === -1) {
        return;
      }

      let gap = window.getComputedStyle(line).gap.replace(/[a-z]/gi, "");

      if (window.screen.width < 768 && this.showSlide >= 2) {
        this.offset = -616 * index;
        line.style.transform = `translateY(${this.offset}px)`;
      } else {
        this.offset = (-line.offsetWidth - gap) * index;
        line.style.transform = `translateX(${this.offset}px)`;
      }

      allBtns.forEach((el) => this.removeActive(el));
      this.addActive(allBtns[index]);
    });
  }

  updateAfterResize() {
    let line = document.querySelector(`.${this.selector.className}-line`);
    line.style.transform = `translateY(0px)`;
    line.style.transform = `translateX(0px)`;

    let allBtns = Array.from(
      document.querySelectorAll(`.${this.selector.className}-dot`)
    );

    allBtns.forEach((el) => this.removeActive(el));
    this.addActive(allBtns[0]);
  }

  init() {
    if (this.showSlide >= 2 && !this.arrow) {
      this.createSliderNumDots();
    } else if (this.showSlide < 2 && !this.arrow) {
      this.createSliderDots();
    }

    this.clickBtn();
  }
}
