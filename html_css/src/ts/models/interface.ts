export interface Data {
  id: number;
  title: string;
  url: string;
  userImage: string;
  redirectLink: string;
  category: string;
}

export interface FormState {
  fullname: FormDataEntryValue;
  phone: FormDataEntryValue;
  mail: FormDataEntryValue;
}

export interface OptionSlider {
  arrow: boolean;
  dots: boolean;
  showSlide: number;
}