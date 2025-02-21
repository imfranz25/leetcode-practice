/**
 * 5 = 5 * 1 and 1 * 5
 * 4 = 4 * 1 and 1 * 4 and 2 * 2
 */

const prime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const primeV2 = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(prime(1));
console.log(prime(5));
console.log(prime(4));
