export function renderItemCust(data) {
  let itemSlider = document.createElement("div");
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

export function renderItemBlog(data) {
  let itemSlider = document.createElement("div");
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

export function renderItemPref(data) {
  let itemSlider = document.createElement("a");
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

function createOption(value) {
  let option = document.createElement("option");
  option.className = `option`;
  option.setAttribute('value', `${value}`);
  option.textContent = `Label ${value}`;

  return option;
}

export function createSelect(value) {
  let select = document.createElement("select");
  select.className = "select";

  for (let i = 0; i < value; i++) {
    select.append(createOption(i + 1));
  }

  return select;
}