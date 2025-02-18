/**
 * 5
 * 0 1 1 2 3
 */

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log("recursiveFibonacci", recursiveFibonacci(7));
