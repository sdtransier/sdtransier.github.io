// Get the temperature and wind speed from the webpage and store them in variables
let temperatureFromPage = parseInt(document.getElementById('currentTemperature').innerHTML);
let windSpeedFromPage = parseInt(document.getElementById('windSpeed').innerHTML);

// Calculate the wind chill
let result = 35.74 + (0.6215 * temperatureFromPage) - (35.75 * Math.pow(windSpeedFromPage, 0.16)) + (0.4275 * temperatureFromPage * Math.pow(windSpeedFromPage, 0.16));

// Display the wind chill to the user
document.getElementById('windChill').innerHTML = result.toFixed(0);