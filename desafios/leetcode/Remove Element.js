let nums = [3,2,2,3]
let val = 3

let k = 0
let l = 0

while (l < nums.length) {
    if (nums[l] !== val) {
        l++
        k++
    }
    else{
        nums.splice(l, 1)
    }
}

console.log(nums)