const header = document.querySelector("header");

window.addEevntListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 200)
});

Let menu = deocument.querySelector('#menuicon');
Let navlist = document.querySelector('.navlist'):

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open'); };

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open'); };

const sr = ScrollReveal){
distance: '40px',
  duration: 2050,
  delay: 200,
  reset: true
});

sr.reveal('.hero-text',{origin: 'top'});
  sr.reveal('.about-img, .Experience-item, .about-text',{origin: 'top'});
