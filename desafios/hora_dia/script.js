function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img1")
    var msg2 = document.getElementById("msg2")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas `
    msg2.innerHTML = `Ainda faltam ${24 - hora} horas para acabar o dia! <br> força soldado`
    if (hora <= 12) {
        //manha
        msg.innerHTML += 'da manhã.'
        img.src = "../imagens/Amanhecer01.jpg"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora <= 18) {
        //tarde
        msg.innerHTML += 'da tarde.'
        img.src = "../imagens/morning.webp"
        document.body.style.background = "#b9846f"     
    }
    else{
        //noite
        msg.innerHTML += 'da noite.'
        img.src = "../imagens/noite-imagem.avif"
        document.body.style.background = "#515154"
        
    }
}
    

