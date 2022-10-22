export class SliderPref {
  constructor(slider) {
    this.slider = slider;
    this.offset = 0;
    this.sliderLine = document.createElement('div');
  }
  
  createSliderItemMarkup(el) {
    let itemSlider = document.createElement("a");
    itemSlider.className = `${this.slider.className}-link`;
    itemSlider.innerHTML = `
      <img
        class="prefer__slider-img"
        src="${el.url}"
        alt="Graphic Design"
        width="197"
      />
      <p class="prefer__slider-text">${el.title}</p>`;
    return itemSlider;
  }
  
  createBtnPrev() {
    let btn = document.createElement("button");
    btn.className = "slider-prev prefer__btn";
    btn.innerHTML = `
      <svg class="icon__prev" width="24" height="24">
        <use href="./assets/icons/symbol-defs.svg#icon-slide-left"></use>
      </svg>
      `;

    return btn;
  }
  
  createBtnNext() {
    let btn = document.createElement("button");
    btn.className = "slider-next prefer__btn";
    btn.innerHTML = `
      <svg class="icon__next" width="24" height="24">
        <use href="./assets/icons/symbol-defs.svg#icon-slide-right"></use>
      </svg>
    `;

    return btn;
  }
  
  createItemList(value) {
    let btnPrev = document.querySelector('.slider-prev.prefer__btn');
    let itemList = document.createElement("div");
    itemList.className = `${this.slider.className}-list`;

    btnPrev.after(itemList);
    itemList.append(this.sliderLine);

    this.getData(value).then( data => {
      data.forEach((el) => {
        this.sliderLine.append(this.createSliderItemMarkup(el));
      });
    })

    return itemList;
  }
  
  createSelect(value) {
    let select = document.createElement("select");
    select.className = "prefer__select";

    for (let i = 0; i < value; i++) {
      select.append(this.createOption(`${this.slider.className}`, i + 1));
    }
    return select;
  }
  
  createOption(className, value) {
    let option = document.createElement("option");
    option.className = `${className}-option`;
    option.setAttribute('value', `${value}`);
    option.textContent = `Label ${value}`;

    return option;
  }
  
  async getData(value) {
    try {
      const events = await (
        await fetch(`https://jsonplaceholder.typicode.com/albums/${value}/photos`)
        ).json();
        return events;
      } catch (err) {
      console.error("Check your internet connection or server running");
    }
  }
  
  init() {
    this.slider.before(this.createSelect(3));
    this.slider.append(this.createBtnPrev());
    this.slider.append(this.createBtnNext());
    this.sliderLine.className = 'prefer__slider-line';
    this.createItemList(1);
    this.clickBtn();
    this.clickSelect();
  }

  clickBtn() {
    let sliderBtns = Array.from(document.querySelectorAll(".prefer__btn"));
    let itemline = document.querySelector(`.${this.slider.className}-line`);

    sliderBtns.forEach((el) => {
      el.addEventListener("click", () => {
        if(sliderBtns.indexOf(el) === 0 && this.offset > -9982) {
          this.offset -= 217;
          itemline.style.transform = `translateX(${this.offset}px)`
        } 
        else if(sliderBtns.indexOf(el) === 1 && this.offset < 0) {
          this.offset += 217;
          itemline.style.transform = `translateX(${this.offset}px)`
        }
      });
    });
  }

  clickSelect() {
    let select = document.querySelector('.prefer__select');

    select.addEventListener('change', () => {
      let listItem = document.querySelector(`.${this.slider.className}-list`);
      this.sliderLine.innerHTML = '';
      listItem.remove(this.sliderLine);
      this.offset = 0;
      this.createItemList(select.value);
    })
  }
}
