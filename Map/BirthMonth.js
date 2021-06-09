// Write a Program to generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays in the same month. Store it to finally print.
let bdayMonthMap = new Map();
for (let month = 1; month <= 12; month++) {
    bdayMonthMap.set(month, 0);
}
for (let p = 0; p < 50; p++) {
    individualsMonth = Math.floor(Math.random() * 12) + 1;
    bdayMonthMap.set(individualsMonth, bdayMonthMap.get(individualsMonth) + 1);
}
console.log("The birth month of 50 individuals are: ")
for (let [key, value] of bdayMonthMap.entries()) {
    console.log("month: " + key + " total: " + value);
}