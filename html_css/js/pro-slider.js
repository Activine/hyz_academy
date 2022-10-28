export class ProSlider {
  constructor(selector, { arrow, dots }) {
    this.selector = document.querySelector(`${selector}`);
    this.arrow = arrow;
    this.dots = dots;
    this.selector.className = `${selector.replace(/[#]/gi, '')}`;
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

  clickBtn() {
    let allBtn = document.querySelector(`.${this.selector.className}-dots`);
    let allBtns = Array.from(document.querySelectorAll(`.${this.selector.className}-dot`));
    let line = document.querySelector(`.${this.selector.className}-line`);

    this.addActive(allBtns[0]);

    allBtn.addEventListener('click', (event) => {
      let index = allBtns.indexOf(event.target);
      console.log(index);

      if(index === -1) {
        return
      }

      this.offset = -this.selector.offsetWidth * index;
      line.style.transform = `translateX(${this.offset}px)`;
      
      allBtns.forEach(el => this.removeActive(el));
      this.addActive(allBtns[index]);
    })
  }

  init() {
    if (!this.arrow) {
      this.createSliderDots();
    }
    this.clickBtn();
  }
}
