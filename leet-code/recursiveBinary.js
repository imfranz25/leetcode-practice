const recursiveBinarySearch = (t, n) => {
  return search(t, n, 0, n.length - 1);
};

const search = (t, n, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }

  const middleIndex = Math.floor(rightIndex - leftIndex / 2);
  const middleElement = n[middleIndex];
  if (middleElement === t) {
    return middleIndex;
  }

  if (middleElement > t) {
    return search(t, n, leftIndex, middleIndex - 1);
  } else {
    return search(t, n, middleIndex + 1, rightIndex + 1);
  }
};

const array = [1, 5, 51, 2, 3, 15].sort((a, b) => a - b);

console.log("array", array);
console.log("recursiveBinarySearch", recursiveBinarySearch(15, array));
