import { data } from "./data.js";
import { scrollApp, createBurger } from "./mobile-menu.js";
import { SliderPref } from "./slider-prefer.js";
import { Storage } from "./storage.js";
import { HtmlFiller } from "./html-filler.js";
import { ProSlider } from "./pro-slider.js";
import { renderItemCust, renderItemBlog } from './html-filler.mapper.js'

class App {
  constructor() {
    scrollApp();
    createBurger();
    this.storage = new Storage(data, "dataSlider");
  }

  createHtml() {
    let custItems = new HtmlFiller("#customers__slider", renderItemCust, this.storage.setSliderData());
    custItems.init();

    let blogItems = new HtmlFiller("#blog__slider", renderItemBlog, this.storage.setSliderData());
    blogItems.init();
    return { custItems, blogItems}
  }

  createSliders() {
    this.createHtml()
    let custSlider = new ProSlider("#customers__slider", {arrow: false, dots: true, showSlide: 1});
    custSlider.init();


    let blogSlider = new ProSlider("#blog__slider", {arrow: false, dots: true, showSlide: 2});
    blogSlider.init();

    let prefSlider = new SliderPref("prefer__slider");
    prefSlider.init();

    console.log(blogSlider);
    return { custSlider, blogSlider }
  }

  init() {
    let {custSlider, blogSlider} = this.createSliders();

    window.addEventListener("resize", function () {
      blogSlider.updateAfterResize();
      custSlider.updateAfterResize();
    });
  }
}

new App().init();

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
