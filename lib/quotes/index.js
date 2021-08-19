// Dependencies
const fs = require('fs');

// quotes object- module Scaffolding
const myQuotes = {};

// function to generate an array of quotes
myQuotes.readQuotes = function readQuotes() {
  const quotesReading = fs.readFileSync(`${__dirname}/quotes.txt`, "UTF-8");
  return quotesReading.split("\n");
};

// exporting the object
module.exports = myQuotes;