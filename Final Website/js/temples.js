temples = [109, 108, 103, 198];
temples.forEach((templeid) => {
    fetch(`https://nathan-byui-api.herokuapp.com/temples/${templeid}`, {
        headers: {
            apiKey: 'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N',
        },
    })
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            let card = document.createElement('section');
            let image = document.createElement('img');
            image.setAttribute('src', jsObject.imageurl);
            image.alt = jsObject.city;
            let h2 = document.createElement('h2');
            h2.textContent = jsObject.name;
            let h3 = document.createElement('h3');
            h3.textContent = 'Phone: ' + jsObject.phone;
            let p = document.createElement('h3');
            p.textContent = 'Address: ' + jsObject.address1;
            let p2 = document.createElement('h3');
            p2.textContent = 'Services: ';
            let p22 = document.createElement('p');
            p22.textContent = jsObject.services[0];
            let p3 = document.createElement('p');
            p3.textContent = jsObject.services[1];
            let p4 = document.createElement('p');
            p4.textContent = jsObject.services[2];
            let p5 = document.createElement('p');
            p5.textContent = jsObject.services[3];
            let ptext = document.createElement('h3');
            ptext.textContent = 'Closure Schedule';
            let p55 = document.createElement('h3');
            p55.textContent = 'History: ';
            let p6 = document.createElement('p');
            p6.textContent = jsObject.Summary.facts;

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p22);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(p5);
            card.appendChild(ptext);
            for (const key of Object.keys(jsObject.closures)) {
                // console.log(jsObject.closures[key]);

                jsObject.closures[key].forEach((closure) => {
                    let p7 = document.createElement('p');
                    p7.textContent =
                        'Startdate: ' +
                        closure.startdate +
                        ' - ' +
                        'Enddate: ' +
                        closure.enddate;

                    card.appendChild(p7);
                });
            }
            card.appendChild(p55);
            card.appendChild(p6);

            document.querySelector('.cards').appendChild(card);
        });
});

function windchill(t, s) {
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    if (f <= 50 && s > 3) {
        return Math.round(f);
    } else {
        return 'N/A';
    }
}

let url1 =
    'https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=8a72f8b1a2aa52cceb679b01f0cbd4e5';
let url2 =
    'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=8a72f8b1a2aa52cceb679b01f0cbd4e5';
let url3 =
    'https://api.openweathermap.org/data/2.5/weather?id=4393217&units=imperial&appid=8a72f8b1a2aa52cceb679b01f0cbd4e5';
let url4 =
    'https://api.openweathermap.org/data/2.5/weather?id=4544379&units=imperial&appid=8a72f8b1a2aa52cceb679b01f0cbd4e5';

fetch(url1)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('span').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = Math.round(
            jsObject.main.temp
        );
        document.getElementById('hum').textContent = jsObject.main.humidity;
        document.getElementById('ws').textContent = jsObject.wind.speed;
        document.getElementById('wind').textContent = windchill(
            jsObject.main.temp,
            jsObject.wind.speed
        );
    });

fetch(url2)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('span2').textContent = jsObject.weather[0].main;
        document.getElementById('temp2').textContent = Math.round(
            jsObject.main.temp
        );
        document.getElementById('hum2').textContent = jsObject.main.humidity;
        document.getElementById('ws2').textContent = jsObject.wind.speed;
        document.getElementById('wind2').textContent = windchill(
            jsObject.main.temp,
            jsObject.wind.speed
        );
    });

fetch(url3)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('span3').textContent = jsObject.weather[0].main;
        document.getElementById('temp3').textContent = Math.round(
            jsObject.main.temp
        );
        document.getElementById('hum3').textContent = jsObject.main.humidity;
        document.getElementById('ws3').textContent = jsObject.wind.speed;
        document.getElementById('wind3').textContent = windchill(
            jsObject.main.temp,
            jsObject.wind.speed
        );
    });

fetch(url4)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('span4').textContent = jsObject.weather[0].main;
        document.getElementById('temp4').textContent = Math.round(
            jsObject.main.temp
        );
        document.getElementById('hum4').textContent = jsObject.main.humidity;
        document.getElementById('ws4').textContent = jsObject.wind.speed;
        document.getElementById('wind4').textContent = windchill(
            jsObject.main.temp,
            jsObject.wind.speed
        );
    });
