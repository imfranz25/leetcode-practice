const mergeSort = (n) => {
  if (n.length < 2) {
    return n;
  }

  const mid = Math.floor(n.length / 2);
  const left = n.slice(0, mid);
  const right = n.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sortedArray = [];

  while (right.length && left.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
};

const unsorted = [-6, 20, 8, -2, 4];
console.log("unsorted", unsorted);
console.log("sorted", mergeSort(unsorted));
