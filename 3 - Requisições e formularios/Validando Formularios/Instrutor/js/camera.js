const botaoIniciarCamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const tirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const abrirMinhaConta = document.querySelector('[data-enviar]')

let imagemURL = ''

botaoIniciarCamera.addEventListener('click', async function(){
    const iniciarVideo = await navigator.mediaDevices.
    getUserMedia({video: true, audio: false})

    botaoIniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'

    video.srcObject = iniciarVideo
})

tirarFoto.addEventListener("click", function() {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/jpg")
    campoCamera.style.display = "none"
    mensagem.style.display = 'block'
})


abrirMinhaConta.addEventListener("click", function(){

    const receberDadosExistentes = localStorage.getItem("cadastro")
    const conveteValor = JSON.parse(receberDadosExistentes)

    conveteValor.imagem = imagemURL

    localStorage.setItem("cadastro", JSON.stringify(conveteValor))

    window.location.href = "./abrir-conta-form-3.html"

})