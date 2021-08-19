/// My first Node project
/// Author: Mushfiq Mashuk
/// Date: 14-06-2021

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require("./lib/quotes");


// App object- Module Skeleton or Scaffolding
const app = {};

// console.log(mathLibrary.generateRandomNumber(2,10));
// console.log(quotesLibrary.readQuotes()[6]);

// configuration 
app.config = {
    quoteInterval: 3000,
};

// App body

app.printQuote = function() {
  const quotesArray = quotesLibrary.readQuotes();
  const randomNumber = mathLibrary.generateRandomNumber(
    0,
    quotesArray.length - 1
  );
  console.log(quotesArray[randomNumber]);
};

app.final = function() {
  setInterval(app.printQuote, app.config.quoteInterval);
};

// function invoke
app.final();