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

export interface SliderSelect {
  selector: string;
  sliderContainer: HTMLElement;
  value: number;
  init(): void;
}

export interface Storage {
  setData(key: string, data: any): void;
  getData(key: string): Array<Data> | null;
}