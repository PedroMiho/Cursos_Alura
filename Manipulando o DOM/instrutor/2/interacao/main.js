const controleAjuste = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controleAjuste.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        quantidadeEquipamentos(evento.target.innerHTML, evento.target.parentNode)
        alteraDados(evento.target.dataset.peca, evento.target.dataset.controle)

    })
}) 

function quantidadeEquipamentos(operador, valorAtual){
    
    var dados = valorAtual.querySelector('[data-contador]')  

    if (operador === "+" && dados.value < 15){
        dados.value = parseInt(dados.value) + 1
    }
    else if (operador === "-" && dados.value > 0) {
        dados.value = parseInt(dados.value) - 1
    }
    else {
        window.alert('Valor Mínimo ou Máximo foi atingido')
    }

    
}

function alteraDados(peca, operador){

    estatistica.forEach((elemento) => {

        if(operador === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
        if(operador === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
        
    })

}