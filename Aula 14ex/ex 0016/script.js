function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ('Impossível contar')
        window.alert('[ERRO] Faltam dados!')
    }
    else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo Inválido')
            p = 1
        }
        /*Ordem Crescente*/
        if(i < f){
            for(let c = 1;c <= f;c +=p ){
            res.innerHTML += `${c} \u{1F449}` 
        }
        }
        /*Ordem Decrescente*/
        else{
            for(let c = i;c >= f;c -= p){
            res.innerHTML += `${c} \u{1F449}`
        }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}