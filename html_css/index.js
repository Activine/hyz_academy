import { data } from './data.js';
import { paginator } from '../js/paginator.js';

const sliderList = document.querySelector(".blog__list");
paginator(sliderList, data)