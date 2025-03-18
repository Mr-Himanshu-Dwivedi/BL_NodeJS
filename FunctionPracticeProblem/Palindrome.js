function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}

function checkPalindromes(num1, num2) {
    console.log(`${num1} is ${isPalindrome(num1) ? "a Palindrome" : "not a Palindrome"}`);
    console.log(`${num2} is ${isPalindrome(num2) ? "a Palindrome" : "not a Palindrome"}`);
}

// Example usage:
checkPalindromes(121, 123);
checkPalindromes(454, 789);
