function calcular(){
    //Recebe ano atual
    var ano = new Date()
    var ano_atual = ano.getFullYear()

    //Carrega ano da input em String e carrega res
    var fano = document.getElementById("txt_ano")
    var res = document.querySelector("div#res")

    //Se o valor iserido > 4 caracter, < 1, ou vazio ERRO
    if(fano.value.length == 0 || Number(fano.value) > ano_atual || fano.value < 1){
        window.alert('ERRO[x&6784 - Ano inserido inválido')
    }

    //Se não Executa o programa
    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano_atual - Number(fano.value)
        var gen = ''
        //res.innerHTML = `Idade Calculada ${idade}`

        //Como c eu acessace o HTMl e criasse uma tag img com id foto, rapaz daora em
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        //Se o o primeiro input:radio estiver marcado recebe o valor masculino
        if (fsex[0].checked) {
            gen = "Masculino"
            if (idade < 10) {
                //Criança
                img.setAttribute("src", "criança-homem.jpg")

            }
            else if (idade < 20) {
                //adolescente
                img.setAttribute("src", "jovem-homem.jpg")
            }
            else if(idade < 50){
                //adulto
                img.setAttribute("src", "homem-adulto.jpeg")
            }
            else{
                //idoso
                img.setAttribute("src", "homem-idoso.jpg")
            }
            res.innerHTML = `Detectamos Homem de ${idade} anos`
        }
        else if(fsex[1].checked){
            gen = "Feminino"
            if (idade < 10) {
                //Criança
                img.setAttribute("src", "criança-mulher.jpg")
            }
            else if (idade < 20) {
                //adolescente
                img.setAttribute("src", "jovem-mulher.jpg")
            }
            else if(idade < 50){
                //adulto
                img.setAttribute("src", "adulto-mulher.jpg")
            }
            else{
                //idoso
                img.setAttribute("src", "idoso-mulher.jpg")
            }
            res.innerHTML = `Detectamos Mulher de ${idade} anos`
        }

        //img é especial é um elemento, por isso tenho que adicionar ela como um filho no xyz da div res
        res.appendChild(img)
    }
}
    

