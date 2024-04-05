function Contar(){
    var txtini = document.getElementById("txtini")
    var txtfim = document.getElementById("txtfim")
    var txtpas = document.getElementById("txtpas")
    ini = Number(txtini.value)
    fim = Number(txtfim.value)
    pas = Number(txtpas.value)

    var string = ''
    var res = document.getElementById("res")
    //res.innerHTML = `ini=${ini}, fim=${fim}, pas=${pas}`
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        res.innerHTML += "Erro, altere os valores acima!"
    }
    else{
        if (pas == 0){
            pas = 1
        }
        if (ini < fim) {
            //Cotagem Crescente
           for(var c = ini; c <= fim; c+= pas){
            string += `${c} -> `
            }
            string += " OK"

            res.innerHTML += string 
        }
        if (ini > fim) {
            //Contagem Decrescente
            for(var k = ini; k >= fim; k -= pas){
                string += `${k} -> `
                }
                string += " OK"
    
                res.innerHTML += string
        }
    }
    
}
    

