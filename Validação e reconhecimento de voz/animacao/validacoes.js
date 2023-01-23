function verificaValorValido(chute){
    const numero = +chute
    if (chuteInvalido(numero)){
        elementoChute.innerHTML +=
            `<div> Valor Invalido </div>`
        return
    }

    if(numeroMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `
            <div>Fale um valor entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Você Acertou !!!</h1>
            <h3>O número secreto era ${numeroSecreto}
            <button class='botao'>Jogar Novamente</button>
        `
        const botaoTR = document.querySelector('.botao')

        botaoTR.addEventListener('click', () => {
            location.reload()
        })

    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div> O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `      
    }

    else{
        elementoChute.innerHTML += `
            <div> O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        ` 
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQuePermitido(numero){
    return numero  > maiorValor || numero < menorValor
}


