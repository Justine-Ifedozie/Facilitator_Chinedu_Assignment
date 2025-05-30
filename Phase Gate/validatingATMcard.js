//Create a function to validate an ATM card number and identifies the card issuer.

//The function should take an array representing the card number as input and returns an object.


function validateNumber(atmCard){
let Mastercard = {
                      valid: true,
                      issuer: "Mastercard",
                       };

let Visacard = {
                      valid: true,
                      issuer: "Visacard",
                       };
                       
let Discover = {
                      valid: true,
                      issuer: "Discover",
                       };

let America = {
                      valid: true,
                      issuer: "America Express",
                       };

let invalid = {
                      valid: false,
                      issuer: "Invalid length",
                       };


if (atmCard[0] == 5 && atmCard.length == 16) return Mastercard;

if (atmCard[0] == 4 && atmCard.length == 16) return Visacard;

if (atmCard[0] == 6 && atmCard.length == 16) return Discover;

if (atmCard[0] == 3 && atmCard.length == 15) return America;

else if (atmCard[0] == 5 && atmCard.length != 16) return invalid;

else if (atmCard[0] == 4 && atmCard.length != 16) return invalid;

else if (atmCard[0] == 6 && atmCard.length != 16) return invalid;

if (atmCard[0] == 3 && atmCard.length != 15) return America;

}

firstCard = [4, 0, 0, 2, 3, 5, 6, 3, 4, 7, 5, 5, 8, 2, 8, 3];

secondCard = [5, 0, 0, 2, 3, 5, 6, 3, 4, 7, 5, 5, 8, 2, 8, 3];

thirdCard = [6, 0, 0, 2, 3, 5, 6, 3, 4, 7, 5, 5, 8, 2, 8, 3];

fourthCard = [3, 0, 0, 2, 3, 5, 6, 3, 4, 7, 5, 5, 8, 2, 8];

fifthCard = [4, 0, 0, 2, 3, 5, 6, 3, 4, 7, 5, 5, 8, 2, 8, 3, 2];

let result = validateNumber(fifthCard);

console.log(result);
