const convertToCelsius = function(fahrenheit) 
{
  let rawCelsius = (5/9) * (fahrenheit - 32);
  return roundDecimal(rawCelsius, 1);
};

const convertToFahrenheit = function(celsius) {
  let rawFahrenheit = (9/5) * (celsius) + 32;
  return roundDecimal(rawFahrenheit, 1);
};

function roundDecimal(num, places)
{
  return (Math.round(num * Math.pow(10, places)) / Math.pow(10, places));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
