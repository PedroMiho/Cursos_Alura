const botaoOrdenaPreco = document.querySelector('#btnOrdenarPorPreco')


botaoOrdenaPreco.addEventListener('click', ordenaLivros)

function ordenaLivros(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}
