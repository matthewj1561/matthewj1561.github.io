const requestURL =
    'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8a72f8b1a2aa52cceb679b01f0cbd4e5';

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
