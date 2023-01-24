const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const numeroFalado = e.results[0][0].transcript
    elementoChute.innerHTML = `
        <div id="numeroFalado" class="numeroFalado">Você disse:</div>
        <span class="numeroAtual">${numeroFalado}</span>
    `
    validacao(numeroFalado)
}

recognition.addEventListener('end', () => {
    recognition.start()
})