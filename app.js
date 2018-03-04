'use strict';

const readlineSync = require('readline-sync');

////////////

var minNumber = parseInt( readlineSync.question('Input min number for rnd value: ') );
var maxNumber = parseInt( readlineSync.question('Input max number for rnd value: ') );


function rndValue() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

var secretNumber = rndValue();

//* Test: Check random vlues:

while (true) {
    var a = rndValue();
    console.log(a);
    if (a == minNumber) {
        break;
    }
}

//*/

var userNumber = readlineSync.question('Guess number from ' + minNumber + ' to ' + maxNumber + ': ');