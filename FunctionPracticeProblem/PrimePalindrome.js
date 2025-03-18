const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Main function to check prime and its palindrome
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a Prime Number.`);
        let palindrome = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindrome}.`);

        if (isPrime(palindrome)) {
            console.log(`Palindrome ${palindrome} is also a Prime Number.`);
        } else {
            console.log(`Palindrome ${palindrome} is NOT a Prime Number.`);
        }
    } else {
        console.log(`${num} is NOT a Prime Number.`);
    }
}

// Taking input from user
rl.question("Enter a number: ", (input) => {
    let num = parseInt(input);
    checkPrimeAndPalindrome(num);
    
});

