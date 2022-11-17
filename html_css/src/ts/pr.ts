export class Pr {
  private selector: string;
  private sliderContainer: HTMLElement;
  private track: HTMLElement;
  private offset: number;
  private list:HTMLElement;

  constructor(selector: string) {
    this.selector = selector;
    this.sliderContainer = document.querySelector(this.selector) as HTMLElement;
    this.track = document.createElement("div");
    this.offset = 0;
    this.list = document.createElement("div");
  }

  private createBtnPrev(): HTMLElement {
    let btn = document.createElement("button") as HTMLButtonElement;
    btn.className = "slider-prev prefer__btn";
    btn.innerHTML = `
      <svg class="icon__prev" width="24" height="24">
        <use href="./assets/icons/symbol-defs.svg#icon-slide-left"></use>
      </svg>
      `;

    return btn;
  }
  
  private createBtnNext(): HTMLElement {
    let btn = document.createElement("button") as HTMLButtonElement;
    btn.className = "slider-next prefer__btn";
    btn.innerHTML = `
      <svg class="icon__next" width="24" height="24">
        <use href="./assets/icons/symbol-defs.svg#icon-slide-right"></use>
      </svg>
    `;

    return btn;
  }

  private renderHtml(): void {
    this.track.style.transform = `translateX(0px)`;
    this.offset = 0;

    let arrItems: Array<Element> = Array.from(this.sliderContainer.children);

    Array.from(this.sliderContainer.children).forEach((el: Element) => el.remove());

    this.list.className = `slider-list`;
    this.list.append(this.track);
    this.track.className = `slider-track`;
    arrItems.forEach(element => {
      this.track.append((element));
    });
  }

  private handleClick(): void {
    let btns: Array<HTMLButtonElement> = Array.from(document.querySelectorAll(`#${this.sliderContainer.id} button`));
    let maxOffset: number = -1953;

    btns.forEach((el: HTMLButtonElement) => {
      el.addEventListener('click', () => {
        switch(true) {
          case(window.innerWidth < 620): {
            maxOffset = -1953;
          } break;

          case(window.innerWidth < 840): {
            maxOffset = -1736;
          } break;

          case(window.innerWidth < 1040): {
            maxOffset = -1519;
          } break;

          default: {
            maxOffset = -1302;
          }
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

  public init(): void {
    this.renderHtml();
    this.sliderContainer.append(this.createBtnPrev()); 
    this.sliderContainer.append(this.list);
    this.sliderContainer.append(this.createBtnNext());
    this.handleClick();
  }
}
