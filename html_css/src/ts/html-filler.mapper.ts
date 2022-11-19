import { Data } from "./models/interface";

export function renderItemCust(data: Data): HTMLElement {
  let itemSlider = document.createElement("div") as HTMLElement;
  itemSlider.className = `item`;
  itemSlider.innerHTML = `
    <figure>
      <blockquote class="item-quote">
        <p class="item-desc">
          ${data.id}
       </p>
        <p class="item-desc">
          ${data.title}
        </p>
      </blockquote>
      <figcaption class="item-author">
        ${data.url}
      </figcaption> 
    </figure>
  `;

  return itemSlider;
}

export function renderItemBlog(data: Data): HTMLElement {
  let itemSlider = document.createElement("div") as HTMLElement;
  itemSlider.className = `item`;
  itemSlider.innerHTML = `
    <div class="item-sidebar">
      <p class="item-sdesc">${data.category}</p>
      <img
        class="item-avatar"
        src="${data.userImage}"
        alt="avatar"
        width="48"
      />
    </div>
    <div class="item-desc">
      <img
        class="item-img"
        src="${data.url}"
        alt="bussiness"
      />
      <h3 class="item-title">
        ${data.title}
      </h3>
      <a class="item-link" href="${data.redirectLink}">Read Now</a>
    </div>
  `;

  return itemSlider;
}

export function renderItemPref(data: Data): HTMLElement {
  let itemSlider = document.createElement("a") as HTMLElement;
  itemSlider.className = `item-link`;
  itemSlider.innerHTML = `
    <img
      class="item-img"
      src="${data.url}"
      alt="Graphic Design"
      width="197"
    />
    <p class="item-text">${data.title}</p>`;

  return itemSlider;
}

function createOption(value: number): HTMLElement {
  let option = document.createElement("option") as HTMLElement;
  option.className = `option`;
  option.setAttribute('value', `${value}`);
  option.textContent = `Label ${value}`;

  return option;
}

export function createSelect(value: number): HTMLElement {
  let select = document.createElement("select") as HTMLElement;
  select.className = "select";

  for (let i = 0; i < value; i++) {
    select.append(createOption(i + 1));
  }

  return select;
}