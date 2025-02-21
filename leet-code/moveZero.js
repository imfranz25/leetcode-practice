const moveZeroes = (nums) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter++;
    } else if (counter > 0) {
      nums[i - counter] = nums[i];
      nums[i] = 0;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
console.log("old", nums);
moveZeroes(nums);
console.log("new", nums);
