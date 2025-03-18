function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

let nums = [];
for (let i = 0; i < 5; i++) {
    nums.push(getRandomNumber());
}

let min = Math.min(...nums);
let max = Math.max(...nums);

console.log("Numbers:", nums);
console.log("Min:", min);
console.log("Max:", max);
