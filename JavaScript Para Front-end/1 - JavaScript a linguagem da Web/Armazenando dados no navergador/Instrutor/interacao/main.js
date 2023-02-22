const item = document.querySelector("#novoItem")
const lista = document.querySelector('#lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

item.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements.nome
    const quantidade = evento.target.elements.quantidade

    const existe = itens.find( (elemento) => elemento.nome == nome.value)
    console.log(existe)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id   
        atualizaElemento(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }
    else{
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0               
        criaElemento(itemAtual)    
        itens.push(itemAtual)
    }


    localStorage.setItem('itens', JSON.stringify(itens))
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item){

    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const quantidadeItens = document.createElement('strong')
    quantidadeItens.innerHTML = item.quantidade
    quantidadeItens.dataset.id = item.id
    novoItem.appendChild(quantidadeItens)

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento (item){
    document.querySelector("[data-id ='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBota = document.createElement('button')
    elementoBota.innerHTML = 'x'
    elementoBota.addEventListener('click', function(){
        deletaElemento(this.parentNode, id)
    } )
    return elementoBota
}

function deletaElemento (tag, id){
    tag.remove()    

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem('itens', JSON.stringify(itens))
}