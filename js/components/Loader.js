import App from '../App.js'

const Loader = {
  isLoaded: false,
  node: null,
  init: _ => {
    Loader.node = document.querySelector("#loader");
  },
  loading: _ => {},
  loaded: _ => {
    // if (Loader.node) Loader.node.style.display = 'none';
    if (Loader.node) Loader.node.remove();
  }
};

export default Loader;
