const botaoOrdenaPreco = document.querySelector('#btnOrdenarPorPreco')

botaoOrdenaPreco.addEventListener('click', ordenaPreco)

function ordenaPreco(){
    
    let livrosOrdenadosPreco = lista.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenadosPreco)

}