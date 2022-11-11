export class Select {
  constructor(sliderContainer, value) {
    this.sliderContainer = document.querySelector(`${sliderContainer}`);
    this.value = value;
  }

  createOption(value) {
    let option = document.createElement("option");
    option.className = `option`;
    option.setAttribute("value", `${value}`);
    option.textContent = `Label ${value}`;

    return option;
  }

  createSelect() {
    let select = document.createElement("select");
    select.className = "select";

    for (let i = 0; i < this.value; i++) {
      select.append(this.createOption(i + 1));
    }

    return select;
  }
  init() {
    this.sliderContainer.before(this.createSelect());
  }
}
