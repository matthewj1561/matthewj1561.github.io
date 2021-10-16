let date_element = document.querySelector('#date');
date_element.innerHTML = 'Last updated: ' + document.lastModified;

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

let navLinks = document.getElementsByClassName('navbar__links');
let currentPage = document.getElementById('cur-page').innerHTML;
currentPage = currentPage.trim().split(' ');

for (let link of navLinks) {
    linkValue = link.innerHTML.trim().split(' ');
    if (currentPage[0] == linkValue[0]) {
        link.style.backgroundColor = '#cde6f5';
        link.style.color = 'black';
    }
}

let curDay = new Date();
curDay = curDay.getDay();
let banner = document.getElementById('pancakes');
if (curDay == 5) {
    banner.style.display = 'block';
}
