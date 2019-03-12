const greetings = require('./greeting.js');
const calculator = require('./calculator.js')

greetings.greetingEnglish();

greetings.greetingJapanese();

greetings.greetingIcelandic();

greetings.greetingSpanish();

calculator.add();

calculator.multiply();

console.log(calculator.add(239,2));
console.log(calculator.multiply(338,4942)
