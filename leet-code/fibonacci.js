/**
 * 5
 * 0 1 1 2 3
 */

const fibonacci = (n) => {
  const arrayList = [0, 1];

  if (n < 0) {
    return "Number is negative";
  }

  for (let i = 2; i < n; i++) {
    arrayList.push(arrayList[i - 1] + arrayList[i - 2]);
  }

  console.log("arrayList", arrayList);
};

fibonacci(7);
