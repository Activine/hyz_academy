export class Slider {
  constructor(slider, data) {
    this.slider = slider;
    this.data = data;
  }

  createSliderItemMarkup(el) {
    let itemSlider = document.createElement("div");
    itemSlider.className = "customers__item";
    itemSlider.innerHTML = `
      <figure class="customers__slider-item">
        <blockquote class="customers__slider-quote">
        <p class="customers__slider-desc">
        ${el.id}
        </p>
        <p class="customers__slider-desc">
        ${el.title}
        </p>
        </blockquote>
        <figcaption class="customers__slider-author">
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
    let allBtn = document.querySelector('.customers__slider-dots');
    let allBtns = Array.from(document.querySelectorAll('.customers__slider-dot'));
    console.log(allBtns);
    let sliderWrap = document.querySelector('.customers__slider-list');
    this.addActive(allBtns[0]);
    console.log(this.slider.className);
    allBtn.addEventListener('click', (event) => {
      let index = allBtns.indexOf(event.target);
      let currentArr = [...this.data].splice(index, 1).reverse();

      if(index === -1) {
        return
      }

      Array.from(sliderWrap.children).forEach(el => el.remove());
      allBtns.forEach(el => this.removeActive(el));
      this.addActive(allBtns[index])
      currentArr.forEach(el => sliderWrap.prepend(this.createSliderItemMarkup(el)));
    })
  }
}
