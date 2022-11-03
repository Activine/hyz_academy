export class ProSlider {
  constructor(sliderContainer, { arrow, dots, showSlide }) {
    this.sliderContainer = document.querySelector(`${sliderContainer}`);
    this.arrow = arrow;
    this.dots = dots;
    this.showSlide = showSlide;
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

  addActive(el) {
    el.disabled = true;
    el.classList.add(`slider-active`);
  }

  removeActive(el) {
    el.classList.remove(`slider-active`);
    el.disabled = false;
  }

  createNumDot(el) {
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

    let offset = 0;
    this.addActive(allBtns[0]);

    this.sliderBtns.addEventListener("click", (event) => {
      let index = allBtns.indexOf(event.target);

      if (index === -1) {
        return;
      }

      const gap = window.getComputedStyle(this.track).gap.replace(/[a-z]/gi, "");
      
      if (this.showSlide >= 2) {
        if(index+1 === allBtns.length && window.innerWidth < 768) {
          this.offset = (-this.track.offsetHeight - gap) * index;
          this.track.style.transform = `translateY(${this.offset}px)`;
          this.track.style.maxHeight = '288px';
        } 
        
        else if (window.innerWidth < 768) {
          this.track.style.maxHeight = '596px';
          this.offset = (-this.track.offsetHeight - gap) * index;
          this.track.style.transform = `translateY(${this.offset}px)`;
        }

        else {
          this.offset = (-this.track.offsetWidth - gap) * index;
          this.track.style.transform = `translateX(${this.offset}px)`;
        }
      } 
      
      else {
        offset = (-this.track.offsetWidth - gap) * index;
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
