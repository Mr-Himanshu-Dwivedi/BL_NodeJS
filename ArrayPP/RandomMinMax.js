let randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}

// Function to find 2nd largest and 2nd smallest without sorting
function findSecondLargestAndSmallest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }

    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return { secondLargest, secondSmallest };
}

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log("Random Numbers:", randomNumbers);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
