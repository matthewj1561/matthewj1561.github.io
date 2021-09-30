document.querySelector('#most-popular').style.backgroundColor = '#FFCF2D';
let x = document.querySelectorAll('.side-buttons');
x[0].style.backgroundColor = '#12AAEB';
x[1].style.backgroundColor = '#12AAEB';

let h1 = document.getElementsByTagName('h1')[1];
h1.style.fontSize = '140px';

document.querySelector('.sign-up').style.backgroundColor = '#12AAEB';

document.querySelector('#column').style.opacity = 0;
document.querySelector('#column-2').style.opacity = 0;
document.querySelector('#column-3').style.opacity = 0;

setTimeout(function () {
    document.querySelector('#column').style.opacity = 1;
    document.querySelector('#column').style.transition = 'opacity 2s';
}, 1000);

setTimeout(function () {
    document.querySelector('#column-2').style.opacity = 1;
    document.querySelector('#column-2').style.transition = 'opacity 2s';
}, 3000);

setTimeout(function () {
    document.querySelector('#column-3').style.opacity = 1;
    document.querySelector('#column-3').style.transition = 'opacity 2s';
}, 2000);

x[0].addEventListener('click', signUp);

x[1].addEventListener('click', signUp);

document.querySelector('.sign-up').addEventListener('click', signUp);

function signUp() {
    alert('You have signed up!');
}
