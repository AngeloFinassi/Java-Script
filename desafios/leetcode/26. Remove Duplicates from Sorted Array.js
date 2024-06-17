nums = [0,0,1,1,1,2,2,3,3,4]
let i = 0
for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
        i ++
        nums[i] = nums[j]
    }
}
console.log(i + 1)  
return i + 1


