function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('p#res')
    if (inicio.value == '' || fim.value == '' || passo.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else if (passo.value == '0') {
        window.alert('Passo inválido! Considerando PASSO 1')
    } else {
        res.innerHTML = 'Contando:<br>'
        for (var c = Number(inicio.value) ; c <= Number(fim.value) ; c += Number(passo.value)) {
            res.innerHTML += `${c} &#x1F449; `
        }
        res.innerHTML += '&#x1F3C1;'
    }
}