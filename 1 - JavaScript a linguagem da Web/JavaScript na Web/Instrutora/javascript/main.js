//Metodo de resolução da instrutora Vanessa
function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio)
   
    if (elemento != null && elemento.localName === 'audio' ){
        elemento.play();
    }

    else {
        window.alert('A classe ou tag informada não é valida') 
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    
    tecla.onclick = function(){
        tocaSom(idAudio);
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



/*
//Meu metodo para solucionar o problema solicitado
const listaDeTeclas = document.querySelectorAll('.tecla');
const audio = document.querySelectorAll('.som_audio')

for(let i = 0; i < listaDeTeclas.length; i++){

    
    listaDeTeclas[i].addEventListener("click", (event) => {
        event.preventDefault();    
        audio[i].play();
    })    
}
*/