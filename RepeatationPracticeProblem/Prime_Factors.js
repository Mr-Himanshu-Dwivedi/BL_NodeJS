const args = process.argv.slice(2);
let num = parseInt(args[0]);

if (isNaN(num) || num < 2) {
    console.log("Please enter a valid integer greater than or equal to 2.");
} else {
    console.log(`Prime factors of ${num}:`);

    // Divide by 2 until num is odd
    while (num % 2 === 0) {
        console.log(2);
        num /= 2;
    }

    // Check odd numbers from 3 to sqrt(num)
    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            console.log(i);
            num /= i;
        }
    }

    // If num is still greater than 2, it must be prime
    if (num > 2) {
        console.log(num);
    }
}
