arr = [10,2,5,3]

for (let c = 0; c < arr.length; c++) {
    for (let k = 0; k < arr.length; k++) {
        if (c != k && arr[c] == (2 * arr[k])) {
            console.log(arr[c], arr[k])
        }
    }
}