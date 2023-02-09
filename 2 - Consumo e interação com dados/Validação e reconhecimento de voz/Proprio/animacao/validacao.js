function validacao(numeroAtual){
    const numero = parseInt(numeroAtual)
    
    if(isNaN(numero)){
        elementoChute.innerHTML += `
            <div>Valor Invalido</div>
        `
    }

    if(numero > maiorValor || numero < menorValor ){
        elementoChute.innerHTML += `
            <div>Valor Invalido: O valor secreto esta entre ${menorValor} e ${maiorValor}</div>
        `
    }

    if(numero === valorSecreto){
        document.body.innerHTML = `
            <h1> Você Acertou !!! </h1>
            <h3> o número secreto era ${valorSecreto}</h3>
            <button class='botao'>Jogar Novamente</button>
        `

        const botao = document.querySelector('.botao')

        botao.addEventListener('click', () => {
            location.reload()
        })
    }

    else if (numero > valorSecreto) {
        elementoChute.innerHTML += `
            <div id=""> O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
    else if (numero < valorSecreto){
        elementoChute.innerHTML += `
            <div id=""> O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}