import { SelectOptions } from "./models/enums";

export class Select {
  selector: string;
  sliderContainer: HTMLElement;
  value: number;

  
  constructor(selector: string, value: number) {
    this.selector = selector;
    this.sliderContainer = document.querySelector(this.selector) as HTMLElement;
    this.value = value;
  }

  createOption(value: string) {
    let option = document.createElement("option");
    option.className = `option`;
    option.setAttribute("value", `${value.replace((/[^0-9]/g), '')}`);
    option.textContent = `${value}`;
    
    return option;
  }

  createSelect() {
    let select = document.createElement("select");
    select.className = "select";

    for (let i = 0; i < this.value; i++) {
      select.append(this.createOption(SelectOptions[i]));
    }

    return select;
  }
  init() {
    this.sliderContainer.before(this.createSelect());
  }
}
