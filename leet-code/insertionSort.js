const insertionSort = (n) => {
  for (let i = 1; i < n.length; i++) {
    const numberToInsert = n[i];
    let j = i - 1;

    while (j >= 0 && n[j] > numberToInsert) {
      n[j + 1] = n[j];
      j = j - 1;
    }

    n[j + 1] = numberToInsert;
  }

  console.log("insertionSort", n);
};

const unsorted = [-6, 20, 8, -2, 4];
console.log("unsorted", unsorted);
insertionSort(unsorted);

// [-6, 20, 8, -2, 4]

// NTI - 20

// [-6, 8, 20, -2, 4]

// NTI - 8

// [-6, -2, 8, 20, 4]

// NTI - -2

// [-6, -2, 4, 8, 20]

// NTI - 4
