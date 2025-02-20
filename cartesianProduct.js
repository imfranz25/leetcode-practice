const cartesian = (a, b) => {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result.push([a[i], b[j]]);
    }
  }

  console.log("result", result);
};

const a = [1, 3, 5];
const b = [3, 6, 7];
console.log("a", a);
console.log("b", b);
cartesian(a, b);
