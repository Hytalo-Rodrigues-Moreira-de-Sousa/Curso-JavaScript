function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manhã.jpg'
        document.body.style.background = '#fffbf7'
    }
    else if(hora >= 12 && hora <=18){
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#b78c75'
    }
    else{
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#879cab'
    }
}