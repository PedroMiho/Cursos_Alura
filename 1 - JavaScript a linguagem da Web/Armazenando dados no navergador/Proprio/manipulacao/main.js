const form = document.querySelector('.adicionar')
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    atualizaFormulario(elemento)
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.nome 
    const quantidade = evento.target.quantidade

    const existe = itens.find(elemento => elemento.nome === nome.value)

    //Adicionando Itens no localStorage
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id
        console.log(existe.id)
        atualizaElemento(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }
    else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0
        atualizaFormulario(itemAtual)
        itens.push(itemAtual)

    }

    //Adiciona itens no localStorage
    localStorage.setItem("itens", JSON.stringify(itens))

    //Apaga os inputs
    nome.value = ""
    quantidade.value = ""

})    

function atualizaFormulario (item){
    //Adicionando Dinamicamente itens ao formulario
    let novoItem = document.createElement('li')
    novoItem.classList.add('item')

    let numeroItens = document.createElement('strong')
    numeroItens.dataset.id = item.id
    numeroItens.innerHTML = item.quantidade

    novoItem.appendChild(numeroItens) //Adicionar uma tag dentro de uma tag pai
    novoItem.innerHTML += item.nome
    novoItem.appendChild(deletaItem(item.id))
    lista.appendChild(novoItem)
}

function atualizaElemento(item){
   document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function deletaItem (id) {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerHTML = "x"
    botaoDeleta.addEventListener('click', function () {
        deletaElemento(this.parentNode, id)
    })

    return botaoDeleta
}

function deletaElemento (tag, id) {
    tag.remove()
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    localStorage.setItem("itens", JSON.stringify(itens))


}