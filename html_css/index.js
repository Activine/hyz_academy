import { data } from './data.js';
import { Slider } from './js/slider.js';
import { SliderBlog } from './js/slider-blog.js';
import {scrollApp, burger} from './js/mobile-menu.js';
import { SliderPref } from './js/slider-prefer.js';

scrollApp();
burger();

let custSlider = new Slider(customers__slider, data);
custSlider.init();

let blogSlider = new SliderBlog(blog__slider, data);
blogSlider.init();

let prefSlider = new SliderPref(prefer__slider, data);
prefSlider.init()
