function getRandomTwoDigitNumber() {
    return Math.floor(Math.random() * 90) + 10;
}
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomTwoDigitNumber());
}
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;
console.log("Random Numbers:", numbers);
console.log("Sum = ", sum);
console.log("Average = ", average.toFixed(2)); 
