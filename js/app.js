const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


// Flickity

var elem = document.querySelector('.cards');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  wrapAround: true,
  contain: true,
  autoPlay: true,
  pageDots: false
});
