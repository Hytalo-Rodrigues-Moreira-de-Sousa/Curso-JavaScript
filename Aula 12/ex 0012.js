var atual = new Date()
var hora = atual.getHours()
console.log(`Agora são atualmente ${hora} horas`)
if(hora < 12){
    console.log('Bom Dia!')
}
else if(hora <= 10){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
}