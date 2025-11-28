function gerar() {
    var num = document.querySelector('input#num')
    var num = Number(num.value)
    var res = document.querySelector('p#res')
    if (num === undefined) {
        window.alert('Erro')
    } else {
        res.innerHTML = ''
        for (var c = 1 ; c <= 10 ; c++) {
            res.innerHTML += `${num} x ${c} = ${num * c}<br>`
        }
    }
}