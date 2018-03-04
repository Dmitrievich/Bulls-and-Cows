'use strict';

const readlineSync = require('readline-sync');

////////////

let numberOfBulls = 0;
let numberOfCows = 0;

// Random Digit func from 0 to 9
function rndValue() {
    return Math.floor(Math.random() * 10);
};

function generateSecret() {
    let secretNumber = [rndValue()];
    let tempNum;

    while (secretNumber.length !== 4) {
        tempNum = rndValue();
        
        if (secretNumber.indexOf(tempNum) === -1) {
            secretNumber.push(tempNum);
        }
    }
    return secretNumber.join('');
};

let secretNumber = generateSecret();
console.log(secretNumber);


/* Test: Check random vlues:
while (true) {
    let a = rndValue();
    console.log(a);
    if (a == 9) {
        break;
    }
};
*/

// Users input:
function readLn(str) {
	let userNumber;
    let state = true;
    
    while (state) {
        userNumber = readlineSync.question(str);
        
        if ((typeof parseInt(userNumber)) == 'number') {
            if ( (userNumber.length == 4) ) {
                state = false;
            }
        }
       
       
       
    }
	return userNumber.toString();
};


let userNumber = readLn('Guess the four-digit number: ');
console.log('User number: ' + userNumber);

function guess() {
    if ( secretNumber == userNumber ) {
        numberOfBulls = 4;
        return 'Win';
    } 
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (secretNumber[i] == userNumber[j]) {
                numberOfCows += 1;
            }
        }
    }

    for (let i = 0; i < 4; i ++) {
        if (secretNumber[i] == userNumber[i]) {
            numberOfCows -= 1;
            numberOfBulls += 1;
        }
    }
    return 'Try again';
};

//console.clear();
console.log(guess()); 

console.log(numberOfBulls); 
console.log(numberOfCows); 
