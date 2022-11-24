import { FormState } from "./models/interface";
const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".form__input") ;

function changeValue(): void {
  form.addEventListener("change", () => {
    const formData: FormData = new FormData(form);
    let formValue: FormState = {
      fullname: formData.get("fullname"),
      phone: formData.get("phone"),
      mail: formData.get("mail"),
    } as FormState

    localStorage.setItem('form', JSON.stringify(formValue))
  });
}

function setData(): void {
  let data: any = JSON.parse(localStorage.getItem("form") as string);

  if (localStorage.getItem("form")) {
    inputs.forEach((input: HTMLInputElement) => {
      input.value = data[input.getAttribute("name") as string];
    });
  }
}

function submitForm(): void {
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    inputs.forEach((el: HTMLButtonElement) => el.value = '');
    localStorage.removeItem('form');
  })
}

export function initForm(): void {
  changeValue();
  setData();
  submitForm();
}