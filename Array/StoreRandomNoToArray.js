//Store the random numbers into an array.
let randomNoArray = new Array();
for (let i = 0; i < 10; i++) {
    randomNoArray.push(Math.floor(Math.random() * 1000));
}
console.log("The Random No's to be stores are: "+randomNoArray);