let counter = 1;

function dropdown() {
    counter += 1;
    if (counter % 2 === 0) {
        document.querySelector('#nav-ul-dropdown').style.display = 'block';
    } else {
        document.querySelector('#nav-ul-dropdown').style.display = 'none';
    }
}

let date_element = document.querySelector('#date');
date_element.innerHTML = 'Last updated: ' + document.lastModified;
