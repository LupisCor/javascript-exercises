const convertToCelsius = function(numInF) {
  return Number(((numInF - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(numInC) {
  return Number((numInC * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
