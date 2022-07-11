const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.querySelector('#windChill');
const speed = document.querySelector('#speed');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Salta&units=metric&appid=3ae5457e97a7d33f682133e2c5262993';
  
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
currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
speed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;

const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
const desc = weatherData.weather[0].description;
  
weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;
  }

  if (currentTemp <= 10 && speed > 4.8) {const windChill = 13.12 + 0.6215 * currentTemp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * currentTemp * Math.pow(speed, 0.16);
  
      document.querySelector("#windChill").innerHTML = `${Math.round(windChill)}&#176;C`;
  } else {
    document.querySelector("#windChill").innerHTML = "N/A";
  }