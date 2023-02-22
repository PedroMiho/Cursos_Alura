const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(`O numero secreto é ${numeroSecreto}`)

const menorValorHtml = document.querySelector('#menor-valor')
menorValorHtml.textContent = menorValor

const maiorValorHtml = document.querySelector('#maior-valor')
maiorValorHtml.textContent = maiorValor
