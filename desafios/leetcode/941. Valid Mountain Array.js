arr = [0,3,2,1]
// arr = [3,5,5]

i = 0
n = arr.length

if (n < 3) {
    console.log("Not a mountain")
}
while (i + 1 < n && arr[i + 1] > arr[i]) {
    i ++
}

if(i == 0 || i == n - 1) {
    console.log("Not a mountain")
}

while (i + 1 < n && arr[i + 1] < arr[i]) {
    i ++
}

console.log(i == n - 1)