import './index.html';
import './scss/style.scss';
import { App } from "./ts/app";

document.addEventListener('DOMContentLoaded', function(): void {
    new App().init()
});