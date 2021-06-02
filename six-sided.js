const prompt = require('prompt-sync')();

const die = prompt("type 'start' to roll die");

if (die === 'start') {
    console.log(Math.floor((Math.random() * 6)) + 1);
}
