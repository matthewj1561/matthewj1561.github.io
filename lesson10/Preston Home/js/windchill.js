let highTemp = document.querySelector('#high-temp').innerHTML;
let windSpeed = document.querySelector('#wind-speed').innerHTML;

windChill = Math.round(
    35.74 +
        0.6215 * highTemp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * highTemp * Math.pow(windSpeed, 0.16)
);

let resultSpan = document.querySelector('#wind-chill');
resultSpan.innerHTML = windChill;

//35.74+0.6215t−35.75s0.16+0.4275ts0.16
