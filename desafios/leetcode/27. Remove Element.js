nums = [3,2,2,3]
val = 3
k = 0

for (let index = nums.length - 1; index >= 0; index--){
    if (nums[index] === val) {
        nums.splice(index, 1)
    }
    else{
        k++
    }
}


console.log(k, nums)