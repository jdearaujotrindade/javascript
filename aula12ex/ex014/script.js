function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        window.document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        window.document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = 'fotonoite.png'
        window.document.body.style.backgroundColor = '#515154'
    }
}