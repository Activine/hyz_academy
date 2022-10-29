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