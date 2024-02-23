const convertToCelsius = function(fahrenheit_temp) {
  let celsius_temp = (fahrenheit_temp - 32) * 5 / 9;
  return Math.round(celsius_temp * 10) / 10;
};

const convertToFahrenheit = function(celsius_temp) {
  let fahrenheit_temp = (9 * celsius_temp / 5) + 32;
  return Math.round(fahrenheit_temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
