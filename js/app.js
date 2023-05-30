// Find the area of a rectangle where the length is 5 and the width is 8.

function areaOfRectangle(length, width) {
  return length * width;
}
let area = areaOfRectangle(5, 10);
console.log(area);

// Find the area of a triangle where the base is 4 and the height is 3.

function areaOfTriangle(base, height) {
  return (base + height) / 2;
}
console.log(areaOfTriangle(1, 2));

// Find the area of a circle where the radius is 3.

function areaOfCircle(π, radius) {
  return π * (radius * radius);
}
let Circle = areaOfCircle(3.14, 2);
console.log(Circle);

// Convert temperatures from Celsius to Fahrenheit and Fahrenheit to Celsius.

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log(celsiusToFahrenheit(2));


function fahrenheitToCelsius(fahrenheit) {
    return fahrenheit -32 * 1.8;
  }
  console.log(fahrenheitToCelsius(2));

  // Check two given numbers and return true if one of the numbers is 50 or if their sum is 50. 

function checkIf50(numOne, numTwo) { 
      if ( numOne == 50 || numTwo == 50 || numOne + numTwo == 50 ){
        return true;
      }else
        return false;

}
console.log(checkIf50(24, 25)); 


// Check whether a given number is even or odd. 

function evenOrOdd(number){
    if (number % 2 == 0){
        return 'even';
    }else 
    return 'odd';
}
console.log(evenOrOdd(2));

