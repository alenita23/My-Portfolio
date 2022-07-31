const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
   document.querySelector('html').style.overflow = 'hidden';
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
   document.querySelector('html').style.overflow = '';
});

overlay.addEventListener('click', () => {
   menu.classList.remove('active');
   document.querySelector('html').style.overflow = '';
});

menuLinks.forEach(function(link) {
   link.addEventListener('click', (e) => {
      menu.classList.remove('active');
      document.querySelector('html').style.overflow = '';
});
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});