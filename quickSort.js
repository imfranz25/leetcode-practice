const quickSort = (n) => {
  if (n.length < 2) {
    return n;
  }

  const pivot = n[n.length - 1];
  const rightArray = [];
  const leftArray = [];

  for (let i = 0; i < n.length - 1; i++) {
    if (n[i] < pivot) {
      leftArray.push(n[i]);
    } else {
      rightArray.push(n[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const unsorted = [-6, 20, 8, -2, 4, 3];
console.log("unsorted", unsorted);
console.log("sorted", quickSort(unsorted));
