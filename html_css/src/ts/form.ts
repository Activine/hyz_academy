import { FormState } from "./models/interface";
const form = document.getElementById("form") as HTMLFormElement;
const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".form__input") ;

function changeValue() {
  form.addEventListener("change",() => {
    let formValue = {} as FormState;

    const formData = new FormData(form);
    const fullname = formData.get("fullname");
    const phone = formData.get("phone");
    const mail = formData.get("mail");

    if (fullname) {
      formValue.fullname = fullname;
    }
    
    if (phone) {
      formValue.phone = phone;
    }

    if (mail) {
      formValue.mail = mail;
    }

    localStorage.setItem('form', JSON.stringify(formValue))
  });
}

function setData() {
  let data = JSON.parse(localStorage.getItem("form") as string);

  if (localStorage.getItem("form")) {
    inputs.forEach((input: HTMLInputElement) => {
      input.value = data[input.getAttribute("name") as string];
    });
  }
}

function submitForm() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputs.forEach(el => el.value = '');
    localStorage.removeItem('form');
  })
}

export function initForm() {
  changeValue();
  setData();
  submitForm();
}