
const currentTemp1 = document.querySelector('#temperature1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDesc1 = document.querySelector('#figcaption1');
const windChill1 = document.querySelector('#windChill1');
const speed1 = document.querySelector('#speed1');
const humidity1 = document.querySelector('#humidity1')


const currentTemp2 = document.querySelector('#temperature2');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#figcaption2');
const windChill2 = document.querySelector('#windChill2');
const speed2 = document.querySelector('#speed2');
const humidity2 = document.querySelector('#humidity2')

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.603722&lon=-58.381592&exclude=hourly,minutely&units=Metric&appid=d1fde7f43b57c183c1d5d38872f2b70b';
  
apiFetch(url);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
function displayResults(weatherData) {
currentTemp1.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
currentTemp2.innerHTML = `<strong>${weatherData.daily[1].temp.day}</strong>`;

speed1.innerHTML = `<strong>${weatherData.current.wind_speed.toFixed(1)}</strong>`;

humidity1.innerHTML = `<strong>${weatherData.current.humidity.toFixed(1)}</strong>`;

const iconsrc1 = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`;
const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}.png`;

const desc1 = weatherData.current.weather[0].description;
const desc2 = weatherData.current.weather[0].description;
  
weatherIcon1.setAttribute('src', iconsrc1);
weatherIcon1.setAttribute('alt', desc1);

weatherIcon2.setAttribute('src', iconsrc2);
weatherIcon2.setAttribute('alt', desc2);

captionDesc1.textContent = desc1;
captionDesc2.textContent = desc2;


  }

  if (currentTemp1 <= 10 && speed > 4.8) {const windChill = 13.12 + 0.6215 * currentTemp1 - 11.37 * Math.pow(speed1, 0.16) + 0.3965 * currentTemp1 * Math.pow(speed1, 0.16);
  
     document.querySelector("#windChill1").innerHTML = `${Math.round(windChill)}&#176;C`;
  } else {
    document.querySelector("#windChill1").innerHTML = "N/A"; 
  }

