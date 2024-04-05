function Contar(){
    var txtn1 = document.getElementById("n1")
    //adiciono o select em um var
    var tabela = document.getElementById("seltab")

    if(txtn1.value.length == 0){
        alert("Prencha Corretamente")
    }
    else{
        var n1 = Number(txtn1.value)
        var c = 1
        //Rodando o loop ou não estou limpando a tabela, deixando vazia
        tabela.innerHTML = ""
        while(c <= 10){
            //crio um Option e adicionoi = a conta abaixo, dps disso adiciono na tabela
            let item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1 * c}`
            item.value = `tab${c}`
            tabela.appendChild(item)
            c++
        }
        //toda vez que rodar ela vai sert limpada antes do loop cmç
    }
}
    

