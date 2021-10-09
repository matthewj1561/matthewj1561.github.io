let date_element = document.querySelector('#date');
date_element.innerHTML = 'Last updated: ' + document.lastModified;

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
