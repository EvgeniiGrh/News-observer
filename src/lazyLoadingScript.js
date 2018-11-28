const button = document.querySelector('#lazy-load-js-css');
button.addEventListener('click', lazyLoading);

function lazyLoading() {
  import('./bundle.js').then((module) => {
    button.classList.add('button-hide');
  })
}
