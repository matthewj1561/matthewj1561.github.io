const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < 3; i++) {
            // temporary checking for valid response and data parsing
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPop = document.createElement('p');
            let averageRainfall = document.createElement('p');

            image.src = 'images/' + towns[i].photo;
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPop.textContent =
                'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent =
                'Average Rainfall: ' + towns[i].averageRainfall;

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPop);
            card.appendChild(averageRainfall);

            document.querySelector('div.cards').appendChild(card);
        }
    });
