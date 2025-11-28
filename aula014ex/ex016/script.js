function contar() {
    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('p#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:<br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (var c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem Regressiva
            for (var c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}