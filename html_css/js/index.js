import { data } from './data.js';
import { Slider } from './slider.js';
import { SliderBlog } from './slider-blog.js';
import {scrollApp, burger} from './mobile-menu.js';
import { SliderPref } from './slider-prefer.js';

class App {
    constructor() {
        scrollApp();
        burger('nav__close', 'hamburger-lines', 'nav__list', 'nav__link');
        
        let custSlider = new Slider('customers__slider', data);
        custSlider.init();
        
        let blogSlider = new SliderBlog('blog__slider', data);
        blogSlider.init();
        
        let prefSlider = new SliderPref('prefer__slider');
        prefSlider.init()
    }
}

new App();