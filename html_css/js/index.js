import { data } from "./data.js";
import { Slider } from "./slider.js";
import { SliderBlog } from "./slider-blog.js";
import { scrollApp, burger } from "./mobile-menu.js";
import { SliderPref } from "./slider-prefer.js";
import { Storage } from "./storage.js";
import { HtmlFiller } from "./html-filler.js";
import { ProSlider } from "./pro-slider.js";

// подскажи где лучше разместить эту функцию...
// для каждого слайда она будет своя... может в отдельный файл вынести? или это перебор?))
function someRender(selector, data) {
  let itemSlider = document.createElement("li");
  itemSlider.className = `${selector.className}-item`;
  itemSlider.innerHTML = `
  <figure>
      <blockquote class="${selector.className}-quote">
      <p class="${selector.className}-desc">
      ${data.id}
      </p>
      <p class="${selector.className}-desc">
      ${data.title}
      </p>
      </blockquote>
      <figcaption class="${selector.className}-author">
      ${data.url}
      </figcaption> 
      </figure>
  `;
  return itemSlider
}

class App {
  constructor() {
    scrollApp();
    burger();

    let storage = new Storage(data, "dataSlider");

    let custItems = new HtmlFiller("#customers__slider", someRender, storage.setSliderData());
    custItems.init()
    
    let custSlider = new ProSlider("#customers__slider", {arrow: false, dots: true});
    custSlider.init()
    // let custSlider = new Slider("customers__slider", storage.setSliderData());
    // custSlider.init();

    let blogSlider = new SliderBlog("blog__slider", storage.setSliderData());
    blogSlider.init();

    let prefSlider = new SliderPref("prefer__slider");
    prefSlider.init();
  }
}

new App();

// const form = document.getElementById("form");
// const inputs = document.querySelectorAll(".form__input");
// console.log(inputs);

// inputs[0].value = 'faf'
// function sub() {
//   for (let i = 0; i < form.children.length-1; i++) {
//     console.log(form.children[i].value);
//     console.log(form.children[i]);
//   }
// }
// sub()






// function initForm() {
//   infoForm()
//   changeValue()
// }
// initForm()

// function changeValue() {
//   form.addEventListener("change", function (event) {
//     let formValue = {};
//     // event.preventDefault();
//     const formData = new FormData(form);
//     const fullName = formData.get("full-name");
//     const tel = formData.get("phone");
//     const email = formData.get("mail");
//     if (fullName) {
//       formValue.fullName = fullName;
//       // console.log(formValue.fullName = fullName);
//       // !fullName && !localStorage.getItem('form')
//     } 
//     if (tel) {
//       formValue.tel = tel;
//       // console.log(formValue.fullName = fullName);
//     }
//     if (email) {
//       formValue.email = email;
//       // console.log(formValue.email = fullName);
//     }
//     localStorage.setItem('form', JSON.stringify(formValue))
//     // console.log(fullName);
//     // console.log(tel);
//     // console.log(email);
    
//     console.log(getdata());
//     // console.log(formValue);
//     // infoForm()
//   });
// }

// function getdata() {
//   return JSON.parse(localStorage.getItem('form'))
// }

// function infoForm() {
//   if (localStorage.getItem('form')) {
//     console.log('AEGBWRSHGEsAfgARDH');
//     inputs.forEach(el => console.log(el.value))
//     let data = getdata()
//     console.log(data);
//     for( let el in data) {
//       console.log(el.value);
//     }
//     // for (let [key, value] of formData.entries()) {
//     //   formObj[key] = value;
//     // }
//     // data.forEarch(el => console.log(el))
//   }
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault()
// })