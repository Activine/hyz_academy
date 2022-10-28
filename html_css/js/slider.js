export class Slider {
  constructor(slider, data) {
    this.slider = document.querySelector(`#${slider}`);
    this.data = data;
    this.slider.className = `${slider}`
  }

  createSliderItemMarkup(el) {
    let itemSlider = document.createElement("div");
    itemSlider.className = "customers__item";
  
    itemSlider.innerHTML = `
      <figure class="${this.slider.className}-item">
        <blockquote class="${this.slider.className}-quote">
        <p class="${this.slider.className}-desc">
        ${el.id}
        </p>
        <p class="${this.slider.className}-desc">
        ${el.title}
        </p>
        </blockquote>
        <figcaption class="${this.slider.className}-author">
        ${el.url}
        </figcaption>
      </figure>
    `;

    return itemSlider
  }

  createDot() {
    let btn = document.createElement("button");
    btn.className = `${this.slider.className}-dot`;

    return btn
  }

  createSliderDots() {
    let sliderBtns = document.createElement("div");
    sliderBtns.className = `${this.slider.className}-dots`

    this.slider.append(sliderBtns);

    for(let i = 0; i < this.data.length; i++) {
      sliderBtns.append(this.createDot())
    }
  }

  init() {
    let sliderWrap = document.createElement("div");

    sliderWrap.className = `${this.slider.className}-list`;
    sliderWrap.append(this.createSliderItemMarkup(this.data[0]));
    
    this.slider.append(sliderWrap);
    this.createSliderDots();
    this.clickBtn();
  }

  addActive(el) {
    el.disabled = true;
    el.classList.add(`${this.slider.className}-active`);
  }

  removeActive(el) {
    el.classList.remove(`${this.slider.className}-active`);
    el.disabled = false;
  }

  clickBtn() {
    let allBtn = document.querySelector(`.${this.slider.className}-dots`);
    let allBtns = Array.from(document.querySelectorAll(`.${this.slider.className}-dot`));
    let sliderWrap = document.querySelector(`.${this.slider.className}-list`);

    this.addActive(allBtns[0]);

    allBtn.addEventListener('click', (event) => {
      let index = allBtns.indexOf(event.target);
      let currentArr = [...this.data].splice(index, 1).reverse();

      if(index === -1) {
        return
      }

      Array.from(sliderWrap.children).forEach(el => el.remove());
      
      allBtns.forEach(el => this.removeActive(el));
      this.addActive(allBtns[index]);
      currentArr.forEach(el => sliderWrap.prepend(this.createSliderItemMarkup(el)));
    })
  }
}
