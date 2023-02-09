const menorValor = 1
const maiorValor = 1000

const menorValorHTML = document.querySelector('#menor-numero')
const maiorValorHTML = document.querySelector('#maior-numero')

menorValorHTML.innerHTML = menorValor
maiorValorHTML.innerHTML = maiorValor

const valorSecreto = parseInt(Math.random() * maiorValor + 1)

console.log(valorSecreto)