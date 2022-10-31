export class PreferSlider {
  constructor(sliderContainer, data, rendItem) {
    this.sliderContainer = document.querySelector(`${sliderContainer}`);
    this.track = document.createElement("div");
    this.data = data;
    this.offset = 0;
    this.rendItem = rendItem;
    this.list = document.createElement("div");
    this.track = document.createElement("div");
  }

  createOption(value) {
    let option = document.createElement("option");
    option.className = `option`;
    option.setAttribute('value', `${value}`);
    option.textContent = `Label ${value}`;
  
    return option;
  }
  
  createSelect(value) {
    let select = document.createElement("select");
    select.className = "select";
  
    for (let i = 0; i < value; i++) {
      select.append(this.createOption(i + 1));
    }

    return select;
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

  async renderHtml(value) {
    let data = await value;

    this.list.className = `slider-list`;
    this.list.append(this.track);
    this.track.className = `slider-track`;
    data.forEach(element => {
      this.track.append(this.rendItem(element));
    });
  }

  delete() {
    this.track.innerHTML = '';
  }

  clickSelect() {
    let select = document.querySelector('.select');

    select.addEventListener('change', () => {
      this.delete();
      this.renderHtml(this.data(select.value));
    })
  }

  btnClick() {
    let btns = Array.from(document.querySelectorAll(`#${this.sliderContainer.id} button`));

    btns.forEach(el => {
      el.addEventListener('click', () => {

        if(btns.indexOf(el) === 0 && this.offset < 0) {
          this.offset += 217;
          this.track.style.transform = `translateX(${this.offset}px)`;
        } 
        else if(btns.indexOf(el) === 1 && this.offset > -1953) {
          this.offset -= 217;
          console.log(this.offset);
          this.track.style.transform = `translateX(${this.offset}px)`;
        }
      })
    })
  }

  init() {
    this.sliderContainer.before(this.createSelect(3));
    this.sliderContainer.append(this.createBtnPrev()); 
    this.sliderContainer.append(this.list);
    this.sliderContainer.append(this.createBtnNext());
    this.renderHtml(this.data(1));
    this.clickSelect();
    this.btnClick();
  }
}
