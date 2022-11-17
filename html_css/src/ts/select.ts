import { SelectOptions } from "./models/enums";
import { ISelect } from "./models/interface";

export class Select implements ISelect {
  public selector: string;
  public sliderContainer: HTMLElement;
  public value: number;

  
  constructor(selector: string, value: number) {
    this.selector = selector;
    this.sliderContainer = document.querySelector(this.selector) as HTMLElement;
    this.value = value;
  }

  public createOption(value: string): HTMLElement {
    let option = document.createElement("option") as HTMLElement;
    option.className = `option`;
    option.setAttribute("value", `${value.replace((/[^0-9]/g), '')}`);
    option.textContent = `${value}`;
    
    return option;
  }

  public createSelect(): HTMLElement {
    let select = document.createElement("select") as HTMLElement;
    select.className = "select";

    for (let i = 0; i < this.value; i++) {
      select.append(this.createOption(SelectOptions[i]));
    }

    return select;
  }
  public init(): void {
    this.sliderContainer.before(this.createSelect());
  }
}
