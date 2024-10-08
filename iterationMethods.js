//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.
/*
const numbers = [10, 13, 20, 25, 38, 35, 40];
//forEach
numbers.forEach(number=> console.log(number)); 
//map
numbers.map(number=> console.log(number * number));
//filter even numbers
console.log(numbers.filter(number=>number%2===0))
//reduce sum
const sum = numbers.reduce((totall,number)=>totall+number,0)
console.log(sum)
// reduce the maxNumber
const maxNumber =numbers.reduce((currentMax,number)=>(number > currentMax ? number : currentMax));
console.log(maxNumber)
*//*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const numbers = [10, 13, 20, 25, 38, 35, 40];
/*
const greater = numbers.filter(number => number >=25)
console.log(greater);
const divisable =numbers.filter(number=>number%5===0)
console.log(divisable);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************//*
const squared = numbers.map(number=>number*number);
console.log(squared);
const mul = numbers.map(number=>number*2);
console.log(mul);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const greaterOrEqual = numbers.filter(number=> number >=20)
                              .map(number=> number*number );
console.log(greaterOrEqual)
const divMultiply =numbers.filter(number=> number%5===0)
                          .map(number=>number*3);
console.log(divMultiply);


/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger =numbers.forEach(number => console.log(number));

  

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
function toCelsius(temperatures) {
    return temperatures.map(fahrenheit => (fahrenheit - 32) * (5 / 9));
  }
  console.log(toCelsius([32, 68, 100]));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold){
    return temperatures.filter(temp=> temp> threshhold)

}
console.log(hottestDays([50,60,70,40],50))

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
