function par(n){
    if ((n % 2) == 0) {
        return "par"
    }
    else{
        return "ímpar"
    }
}

//Se não passar n1, ou n2 eles assumirão valor 0
function somar(n1=0, n2=0){
    return n1 + n2
}

//Da para carregar função em uma variavél, dando parâmetro
let v = function(x){
    return x * 2
}

console.log(v(5))
console.log(par(3))
console.log(somar(33, 77))