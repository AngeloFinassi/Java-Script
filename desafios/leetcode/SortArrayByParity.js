nums = [3,1,2,4]

cont_par = 0
temp = 0
for (let c = 0; c < nums.length; c++) {
    if (nums[c] % 2 === 0){
        temp = nums[cont_par]

        nums[cont_par] = nums[c]
        nums[c] = temp
        
        cont_par ++
    }
}
console.log(nums)