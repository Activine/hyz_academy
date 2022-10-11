const sliderList = document.querySelector(".blog__list");
const sliderDots = document.querySelector(".blog__slider-dots");

export function paginator(domEl, data) {
    currentItems(data);
    renderDots(data);
    const allBlogDots = document.querySelectorAll(".blog__slider-dot");
    addActive(allBlogDots[0]);
  sliderDots.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      allBlogDots.forEach((el) => {
        removeActive(el)
      });
      addActive(event.target)
      deleteItem();
      let newItems = data.slice(
        Number(event.target.textContent) * 2 - 2,
        Number(event.target.textContent) * 2
      );
      newItems.forEach((el) => {
        domEl.append(createEl(el));
      });
    }
  });
}

function createEl(el) {
  let itemSlider = document.createElement("div");
  itemSlider.className = "blog__item";
  itemSlider.innerHTML = `
            <div class="blog__sidebar">
                <p class="blog__sidebar-desc">${el.category}</p>
                <img
                    class="blog__sidebar-avatar"
                    src="${el.userImage}"
                    alt="avatar"
                    width="48"
                />
            </div>
            <div class="blog__item-desc">
                <img
                    class="blog__item-img"
                    src="${el.url}"
                    alt="bussiness"
                />
                <h3 class="blog__item-title item-title">
                    ${el.title}
                </h3>
                <a class="blog__item-link" href="${el.redirectLink}">Read Now</a>
            </div>
        `;
  return itemSlider;
}

function currentItems(data) {
  let currentItems = data.slice(0, 2);
  currentItems.forEach((el) => {
    sliderList.append(createEl(el));
  });
}

function createDots(index) {
  const dot = document.createElement("button");
  dot.className = "blog__slider-dot";
  dot.textContent = `${index + 1}`;
  return dot;
}

function renderDots(data) {
  let counterDots = 0;
  data.forEach((el, i) => {
    if (i % 2 === 0) {
      sliderDots.append(createDots(counterDots));
      counterDots++;
    }
  });
}

function deleteItem() {
  let allItem = sliderList.children;
  console.log(allItem.length);
  console.log(allItem);
  for (let i = 0; i <= allItem.length; i++) {
    sliderList.removeChild(allItem[0]);
  }
}

function addActive(el) {
    el.disabled = true;
    el.classList.add("blog__slider-active");
}

function removeActive(el) {
    el.classList.remove("blog__slider-active");
    el.disabled = false;
}