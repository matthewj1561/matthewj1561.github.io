const requestURL =
    'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=8a72f8b1a2aa52cceb679b01f0cbd4e5';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let currentBase = jsonObject.list[0];
        let current = currentBase.weather[0].description;
        let temp = currentBase.main['temp_max'];
        let humidity = currentBase.main['humidity'];
        let windSpeed = currentBase.wind['speed'];

        document.getElementById('current').innerHTML = current;
        document.getElementById('high-temp').innerHTML = Math.round(temp);
        document.getElementById('humidity').innerHTML = humidity;
        document.getElementById('wind-speed').innerHTML = Math.round(windSpeed);

        let counter = 0;
        jsonObject.list.forEach((element) => {
            if (element['dt_txt'].includes('18:00:00')) {
                counter += 1;
                let elm = 'temp' + counter;
                let temp = document.getElementById(elm);

                temp.innerHTML = Math.round(element['main']['temp']);

                let iconCode = element['weather'][0]['icon'];

                let pic = 'pic' + counter;
                let url =
                    'http://openweathermap.org/img/wn/' + iconCode + '@2x.png';
                let picture = document.getElementById(pic);
                picture.src = url;
            }
        });
    });

const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (town in towns) {
            if (towns[town].name == 'Soda Springs') {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                h2.textContent = 'Upcoming Events';
                card.appendChild(h2);

                for (evnt in towns[town].events) {
                    let p = document.createElement('p');
                    p.textContent = towns[town].events[evnt];
                    card.appendChild(p);
                }

                document.querySelector('.events').appendChild(card);
            }
        }
    });
