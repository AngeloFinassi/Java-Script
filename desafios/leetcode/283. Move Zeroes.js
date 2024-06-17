let nums = [0, 1, 0, 3, 12];
let nonZeroIdx = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        let temp = nums[i];

        nums[i] = nums[nonZeroIdx];
        nums[nonZeroIdx] = temp;
        
        nonZeroIdx++;
    }
}

console.log(nums); // Output: [1, 3, 12, 0, 0]