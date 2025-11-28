function tabuada() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Erro')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1 ; c <= 10 ; c++) {
            var item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n * c}<br>`
            item.value = `tab${c}` // PHP
            tab.appendChild(item)
        }
    }
}