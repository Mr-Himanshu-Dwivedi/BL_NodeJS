function primeFactors(n) {
    let factors = [];
  
    while (n % 2 === 0) {
      factors.push(2);
      n /= 2;
    }
  
    for (let i = 3; i * i <= n; i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
  
    // This condition is for when n is a prime number greater than 2
    if (n > 2) {
      factors.push(n);
    }
  
    return factors;
  }
  
  let num = Math.floor(Math.random() * 250) + 10;
  let primeFactorsArray = primeFactors(num);
  console.log(`Prime factors of ${num}:`, primeFactorsArray);
  