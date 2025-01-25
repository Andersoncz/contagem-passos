function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    // VERIFICAR SE TEM VALOR NOS INPUTS
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados')
        //SE TIVER VALORES
    } else {
        res.innerHTML = 'Contando:<br/>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p < 0){
            alert('PASSO INVÁLIDO')
        }
        if (i < f) {
            //crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`

            }
        } else {
            //decrescente
            for (let c = 1; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3c1}`

    }
}

