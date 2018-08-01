const toggler = document.querySelector('.toggler');
const menu = document.querySelector('.main-menu');

toggler.addEventListener('click', menuToggle);

function menuToggle(e) {
  menu.classList.toggle('collapse');
}



window.addEventListener('resize', resizeFunc);

function resizeFunc() {
  const w = window.innerWidth;
  if(w > 800) {
    menu.classList.remove('collapse');
  } 
};