const convertToCelsius = function(f) {
   let celsius = (f - 32) * 5/9;
   
    if (typeof(celsius) === "number" && Number.isInteger(celsius) === false){
     return  Math.ceil(celsius * 10) / 10;
    } else {
      return celsius;
    }

};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c*9/5)+32;
     
  if (typeof(fahrenheit) === "number" && Number.isInteger(fahrenheit) === false){
    return  Math.ceil(fahrenheit * 10) / 10;
   } else {
     return fahrenheit;
   }

  

};

convertToCelsius(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
