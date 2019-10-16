import 'babel-polyfill';
import main from './main';
import App from './js/App.js';

main();

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
