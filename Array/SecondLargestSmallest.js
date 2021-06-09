//Find the 2nd largest and the 2nd smallest element without sorting the array.
let numberArray  = new Array();
for (let i = 0; i < 10; i++) {
    numberArray.push(Math.floor(Math.random() * 1000));
}
console.log("The Random Numbers are: "+numberArray );

let max1 = Math.max(...numberArray )
let max2 = -Infinity;
for (let num1 of numberArray ) 
    if (num1 > max2 && num1 < max1) 
        max2 = num1;

let min1 = Math.min(...numberArray ) 
let min2 = +Infinity;
for (let num2 of numberArray ) 
    if (num2 < min2 && num2 > min1)
    min2 = num2;

console.log("The 2nd largest number is: " + max2);
console.log("The 2nd smallest number is: " + min2);