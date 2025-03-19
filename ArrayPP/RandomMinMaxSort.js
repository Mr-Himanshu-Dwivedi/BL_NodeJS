let randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Sorted Random Numbers:", randomNumbers);

randomNumbers.sort((a, b) => a - b);

let secondLargestSorted = randomNumbers[randomNumbers.length - 2];
let secondSmallestSorted = randomNumbers[1];

console.log("Sorted Random Numbers:", randomNumbers);
console.log("Second Largest (Sorted):", secondLargestSorted);
console.log("Second Smallest (Sorted):", secondSmallestSorted);