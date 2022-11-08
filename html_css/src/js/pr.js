export class Pr {
  constructor(sliderContainer) {
    this.sliderContainer = document.querySelector(`${sliderContainer}`);
    this.track = document.createElement("div");
    this.offset = 0;
    this.list = document.createElement("div");
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

  renderHtml() {
    this.track.style.transform = `translateX(0px)`;
    this.offset = 0;

    let arrItems = Array.from(this.sliderContainer.children);

    Array.from(this.sliderContainer.children).forEach((el) => el.remove());

    this.list.className = `slider-list`;
    this.list.append(this.track);
    this.track.className = `slider-track`;
    arrItems.forEach(element => {
      this.track.append((element));
    });
  }

  btnClick() {
    let btns = Array.from(document.querySelectorAll(`#${this.sliderContainer.id} button`));
    let maxOffset = -1953;

    btns.forEach(el => {
      el.addEventListener('click', () => {
        if (window.innerWidth < 620) {
          maxOffset = -1953
        } else if (window.innerWidth < 840) {
          maxOffset = -1736
        } else if (window.innerWidth < 1040) {
          maxOffset = -1519
        } else if (window.innerWidth > 1040) {
          maxOffset = -1302
        }

        if(btns.indexOf(el) === 0 && this.offset < 0) {
          this.offset += 217;
          this.track.style.transform = `translateX(${this.offset}px)`;
        } 
        else if(btns.indexOf(el) === 1 && this.offset > maxOffset) {
          this.offset -= 217;
          this.track.style.transform = `translateX(${this.offset}px)`;
        }
      })
    })
  }

  init() {
    this.renderHtml()
    this.sliderContainer.append(this.createBtnPrev()); 
    this.sliderContainer.append(this.list);
    this.sliderContainer.append(this.createBtnNext());
    this.btnClick()
  }
}
