const botao = document.querySelector('#calcular')
const resultado = document.querySelector('.resultado')

botao.addEventListener("click", (evento) => {
    resultado.textContent = "Fui clicado"
    console.log("Fui clicado")
})