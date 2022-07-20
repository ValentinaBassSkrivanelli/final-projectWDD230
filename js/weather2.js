//2
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

function displayResults(weatherData2) {
    currentTemp2.innerHTML = `<strong>${weatherData2.daily[1].temp.day}</strong>`;
    speed2.innerHTML = `<strong>${weatherData2.current.wind_speed.toFixed(1)}</strong>`;
    humidity2.innerHTML = `<strong>${weatherData2.current.humidity.toFixed(1)}</strong>`;
    
    const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData2.daily[1].weather[0].icon}.png`;
    const desc2 = weatherData2.current.weather[0].description;
      
    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc2;
    
      }
    
      if (currentTemp2 <= 10 && speed2 > 4.8) {const windChill = 13.12 + 0.6215 * currentTemp2 - 11.37 * Math.pow(speed2, 0.16) + 0.3965 * currentTemp2 * Math.pow(speed2, 0.16);
      
         document.querySelector("#windChill2").innerHTML = `${Math.round(windChill)}&#176;C`;
      } else {
        document.querySelector("#windChill2").innerHTML = "N/A"; 
      }