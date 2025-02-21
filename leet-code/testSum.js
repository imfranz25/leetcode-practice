/**
 * target 16
 * return index of 11 and 5 = 16
 */

const targetSum = 16;
const numbers = [7, 2, 11, 4, 5];

const twoSum = (array, target) => {
  const indexMap = {}; // Use an object instead of a Map

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    const complement = target - number;

    if (indexMap.hasOwnProperty(complement)) {
      return [indexMap[complement], i];
    }

    indexMap[number] = i;
  }

  return [];
};

console.log(twoSum(numbers, targetSum));
