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

export interface PrState {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string
}

export interface ISelect {
  selector: string;
  sliderContainer: HTMLElement;
  value: number;
  createOption(value: string): HTMLElement;
  createSelect(): HTMLElement;
  init(): void;
}

export interface IStorage {
  data: Array<Data>;
  key: string;
  setSliderData(): any;
}