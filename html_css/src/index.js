import './index.html';
import './scss/style.scss';
import { App } from "./js/app.js";

document.addEventListener('DOMContentLoaded', function() {
    new App().init()
});