const binarySearch = (t, n) => {
  let sorted = n.sort((a, b) => a - b);
  console.log("sorted", sorted);

  let leftIndex = 0;
  let rightIndex = sorted.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (sorted[middleIndex] === t) {
      return middleIndex;
    }

    if (sorted[middleIndex] > t) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

console.log("binarySearch", binarySearch(15, [1, 5, 51, 2, 3, 15]));
