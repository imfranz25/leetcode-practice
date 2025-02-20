const climbingStairCase = (n) => {
  const noOfWays = [1, 2];

  for (let index = 2; index < n; index++) {
    noOfWays[index] = noOfWays[index - 1] + noOfWays[index - 2];
  }

  return noOfWays[n - 1];
};

const num = 5;
console.log("num", num);
console.log("result", climbingStairCase(num));
