import { Slider } from "./slider.js";

export class SliderBlog extends Slider {
  constructor(...args) {
    super(...args);
  }

  createSliderItemMarkup(el) {
    let itemSlider = document.createElement("div");
    itemSlider.className = "blog__item";
    itemSlider.innerHTML = `
      <div class="blog__sidebar">
          <p class="blog__sidebar-desc">${el.category}</p>
          <img
              class="blog__sidebar-avatar"
              src="${el.userImage}"
              alt="avatar"
              width="48"
          />
      </div>
      <div class="blog__item-desc">
          <img
              class="blog__item-img"
              src="${el.url}"
              alt="bussiness"
          />
          <h3 class="blog__item-title item-title">
              ${el.title}
          </h3>
          <a class="blog__item-link" href="${el.redirectLink}">Read Now</a>
      </div>
    `;
    return itemSlider;
  }

  createDot(el) {
    let btn = document.createElement("button");
    btn.className = `${this.slider.className}-dot`;
    btn.textContent = `${el + 1}`;
    return btn
  }

  createSliderDots() {
    let sliderBtns = document.createElement("div");
    sliderBtns.className = `${this.slider.className}-dots`;
    let counterDots = 0;
    this.slider.append(sliderBtns);

    this.data.forEach((el, i) => {
      if(i % 2 === 0) {
        sliderBtns.append(this.createDot(counterDots));
        counterDots++;
      }
    })
  }

  init() {
    let sliderWrap = document.createElement("div");
    sliderWrap.className = `${this.slider.className}-list`;
    sliderWrap.append(this.createSliderItemMarkup(this.data[0]));
    sliderWrap.append(this.createSliderItemMarkup(this.data[1]));

    this.slider.append(sliderWrap);
    this.createSliderDots();
    this.clickBtn();
  }

  clickBtn() {
    let allBtn = document.querySelector('.blog__slider-dots');
    let allBtns = Array.from(document.querySelectorAll('.blog__slider-dot'));
    let sliderWrap = document.querySelector('.blog__slider-list');

    this.addActive(allBtns[0]);
    
    allBtn.addEventListener('click', (event) => {
      let index = allBtns.indexOf(event.target);

      if(index === -1) {
        return
      }

      let currentArr = [...this.data].slice(+(event.target.textContent) * 2 - 2, +(event.target.textContent) * 2).reverse();
      Array.from(sliderWrap.children).forEach(el => el.remove());
      allBtns.forEach(el => this.removeActive(el));
      this.addActive(allBtns.find(el => el.textContent === event.target.textContent));
      currentArr.forEach(el => sliderWrap.prepend(this.createSliderItemMarkup(el)));
    })
  }
}
