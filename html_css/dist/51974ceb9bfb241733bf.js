import "@babel/polyfill";
import './index.html';
import { App } from "./js/app.js";
document.addEventListener('DOMContentLoaded', function () {
  new App().init();
});