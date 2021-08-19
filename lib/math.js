/*
Title: Math library for random number
Author: Mushfiq Ahmed Mashuk
*/

// math object- module Scaffolding
const math = {};

// function to generate a random number 
math.generateRandomNumber = function generateRandomNumber(min, max) {
  let minimum = min;
  let maximum = max;

  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

// Exporting the object
module.exports = math;