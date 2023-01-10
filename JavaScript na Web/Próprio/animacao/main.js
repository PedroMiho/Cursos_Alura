function som (eventoSom){
    let audio = document.querySelector(eventoSom)  
    audio.play()
}

const numerosTecla = document.querySelectorAll('.tecla')

for (let i = 0; i < numerosTecla.length; i++){
    
    const tecla = numerosTecla[i]
    const classTag = tecla.classList[1]
    const eventoSom = `#som_${classTag}`
    console.log(`som_${classTag}`)

    tecla.onclick = function () {
        som(eventoSom)
    }

    tecla.onkeydown = function (evento) {
        console.log(evento)
        
        if(evento.code == 'Space' || evento.key == 'Enter'){
            tecla.classList.add('ativa')
          }    
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

