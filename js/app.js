const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function sendEmail() {
  Email.send({
    SecureToken : "14c51cfe-7f3d-4d14-ac53-476a101334c6",
    To : 'matheus-dias1@outlook.com',
    From : "matheusd61@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}


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

// Modal ===================

const Modal = {
  open(){
    // Abre o modal e add a class active
    document.querySelector('.modal-overlay')
    .classList.add('active')
  },
  close(){
    sendEmail()
    // Fecha o modal e remove a class active
    document.querySelector('.modal-overlay')
    .classList.remove('active')
  }

}
