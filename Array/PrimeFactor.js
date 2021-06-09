// Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
"use strict";
const ps = require("prompt-sync")
const prompt = ps();

let num = prompt("Enter the number :");
let factorsArray = new Array();
for (let i = 1; i <= num; i++) {
    if (num % i == 0 && getFactor(i)) {
        factorsArray.push(i);
    }
}
console.log("The Prime factors are: " + factorsArray);

function getFactor(num) {
    if (num != 1) {
        for (let i = 2; i <= num; i++) {
            if (i == num) {
                return true;
            }
            if (num % i == 0) {
                return false;
            }
        }
    }
}