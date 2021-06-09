// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
let numArray = new Array();
let index = 0;
for (let num = 1; num <= 100; num++) {
    if (Math.floor(num / 10) == (num % 10)) {
        numberArray[index] = num;
        index++;
    }
}
console.log("Repeated digits are: " + numArray); 