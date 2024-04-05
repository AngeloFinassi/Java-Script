let valores = [1, 4, 5, 3, 2]

//1 forma
/*
for (let index = 0; index < valores.length; index++) {
    var element = valores[index]
    console.log(`A posição ${index} tem valor ${element}`)
}
*/

//2 forma, ele NÂO assume o valor, mas evita de digitar o tamanho do for acima
for (let pos in valores){
    // se colocar print(pos) ele vai printar a posição não o valor
    console.log(valores[pos])
}