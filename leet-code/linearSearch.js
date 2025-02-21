/**
 * target = 2
 * [1, 21, 3, 2, -2, 6]
 */

const linearSearch = (t, n) => {
  for (let i = 0; i < n.length; i++) {
    if (t === n[i]) {
      return i;
    }
  }

  return -1;
};

console.log("linearSearch", linearSearch(2, [1, 21, 3, 2, -2, 6]));
