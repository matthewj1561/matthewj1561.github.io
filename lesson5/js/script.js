let date_element = document.querySelector('#updated');
date_element.innerHTML = 'Last updated: ' + document.lastModified;

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Wayfinding
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

let curDate = new Date();
curDay = curDate.getDay();
let banner = document.getElementById('pancakes');
if (curDay == 5) {
    banner.style.display = 'block';
}

footerDate =
    'Current Date : ' +
    curDate.getFullYear() +
    '-' +
    (curDate.getMonth() + 1) +
    '-' +
    curDate.getDate();

document.getElementById('date').innerHTML = footerDate;
