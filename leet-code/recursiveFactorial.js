/**
 * 5*
 * 5 * 4 *3 * 2 * 1
 */

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

console.log("recursiveFactorial", recursiveFactorial(5));
