let rollDieMap = new Map();
let flag = true;
while (flag) {
    let numberOnRollDie = Math.floor(Math.random() * 6) + 1;
    if (rollDieMap.has(numberOnRollDie)) {
        let countNumber = rollDieMap.get(numberOnRollDie);
        countNumber++;
        rollDieMap.set(numberOnRollDie, countNumber);
    } else {
        rollDieMap.set(numberOnRollDie, 1);
    }

    for (let key of rollDieMap.keys()) {
        if (rollDieMap.get(key) == 10) {
            flag = false;
            break;
        }
    }
}

let rollNoAppearedMaxTimes;
let rollNoAppearedLeast;
let minCountOfParticularNo = 100;
console.log(rollDieMap);
for (let [key, value] of rollDieMap) {
    if (value == 10) {
        rollNoAppearedMaxTimes = key;
    }

    if (value < minCountOfParticularNo) {
        minCountOfParticularNo = value;
        rollNoAppearedLeast = key;
    }
}
console.log("The Number that is reached maximum times: " + rollNoAppearedMaxTimes);
console.log("The Number that is reached minimum times: " + rollNoAppearedLeast);