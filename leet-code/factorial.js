/**
 * 5*
 * 5 * 4 *3 * 2 * 1
 */

const factorial = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  console.log("result", result);
};

factorial(0);
factorial(1);
factorial(5);
