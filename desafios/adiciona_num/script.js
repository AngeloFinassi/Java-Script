let numbers = []
var cont = 1

function Adicionar(end=0){
    var txtn1 = document.getElementById("n")
    var table = document.getElementById("table_num")
    var num = Number(txtn1.value)
    if(end == 0){
        if (txtn1.value.length == 0){
            alert("Valor inválido")
        }
        else if(num < 1 || num > 100){
            alert("Valor fora da margem (1 e 100)")
        }
        else if(numbers.includes(num)){
            alert("Valor já foi adicionado")
        }
        else{
            var item = document.createElement("option")
            item.text = `Valor ${num} adicionado`
            item.value = `${cont}`
            numbers.push(num)
            cont++
            table.appendChild(item)
        }
    //console.log(MaiorValor(numbers))
    //console.log(MenorValor(numbers))
    }
    
    if (end == 1){
        Resultados(numbers)
    }
    txtn1.value = ""
}

function Terminou(){
    Adicionar(1)
}

function Resultados(numbers){
    //Maior, Menor, Somar
    let max = MaiorValor(numbers)
    let min = MenorValor(numbers)
    let sum = Somar(numbers)

    //Imprime Resultado
    var res = document.getElementById("res")
    res.innerHTML = `Total:<br>Valores Adicionados: ${numbers.length}<br>Maior Valor: ${max}<br>Menor Valor: ${min}<br>Média: ${sum/numbers.length}<br>Soma total: ${sum}`
}

function MaiorValor(arr){
    if (arr.length === 0){
        return undefined
    }
    else{
        var max = arr[0]
        for (let c = 0; c < arr.length; c++) {
            if (max < arr[c]) {
                max = arr[c]
            }
        }
    }
    return max
}

function MenorValor(arr){
    if (arr.length === 0){
        return undefined
    }
    else{
        var min = arr[0]
        for(let c = 0; c < arr.lenght; c++){
            if (min > arr[c]){
                min = arr[c]
            }
        }
    }
    return min
}

function Somar(arr){
    //Somar
    var sum = 0
    for (let c = 0; c < arr.length; c++) {
        sum += arr[c]
    }
    return sum
}
    
