const bubbleSort = (n) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < n.length; i++) {
      if (n[i] > n[i + 1]) {
        const temp = n[i + 1];
        n[i + 1] = n[i];
        n[i] = temp;
        swapped = true;
      }
    }
  }

  console.log("sorted", n);
};

bubbleSort([2, -5, 62, 9, 1, 14, 4]);
