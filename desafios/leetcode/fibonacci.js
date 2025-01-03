temp = 0
let n = 100

a = 1
b = 0

for (let index = 0; index < n; index++) {
    temp = a
    console.log(a)
    a = a + b
    b = temp
    
    
}