import { SelectOptions } from "./models/enums";
import { SliderSelect } from "./models/interface";

export class Select implements SliderSelect {
  public selector: string;
  public sliderContainer: HTMLElement;
  public value: number;

  
  constructor(selector: string, value: number) {
    this.selector = selector;
    this.sliderContainer = document.querySelector(this.selector) as HTMLElement;
    this.value = value;
  }

  public init(): void {
    this.sliderContainer.before(this.createSelect());
  }

  private createOption(value: string): HTMLElement {
    let option: HTMLElement = document.createElement("option");
    option.className = `option`;
    option.setAttribute("value", `${value.replace((/[^0-9]/g), '')}`);
    option.textContent = `${value}`;
    
    return option;
  }

  private createSelect(): HTMLElement {
    let select: HTMLElement = document.createElement("select");
    select.className = "select";

    for (let i = 0; i < this.value; i++) {
      select.append(this.createOption(SelectOptions[i]));
    }

    return select;
  }
}