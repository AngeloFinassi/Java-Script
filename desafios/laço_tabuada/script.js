function Contar(){
    var txtn1 = document.getElementById("n1")
    var table = document.getElementById("seltab")

    if (txtn1.value.lenght == 0) {
        alert("Valor Inválido")   
    }
    else{
        var n1 = Number(txtn1.value)
        var c = 1;
        table.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${n1} X ${c} = ${n1 * c}`
            //item.value = `${c}`
            table.appendChild(item)
            c ++
        }
    }
}
