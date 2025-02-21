const replaceCount = (array) => {
  let count = 1;
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    if (i < result.length - 1 && result[i] === result[i + 1]) {
      count++;
    } else if (count > 1) {
      result[i] = count;
      count = 1;
    }
  }

  return result;
};

const input = ["a", "a", "b", "j", "a", "a", "a", "l"];
console.log("input", input);
console.log("result", replaceCount(input));
