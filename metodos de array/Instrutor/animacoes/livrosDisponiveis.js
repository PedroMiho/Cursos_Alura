const botaoLivrosDisponiveis = document.querySelector('#btnLivrosDisponiveis')

botaoLivrosDisponiveis.addEventListener('click', livrosDisponiveis)

function livrosDisponiveis(){
    
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0) 
    exibirLivrosNaTela(livrosDisponiveis)
    exibirValorTotalNaTela(livrosDisponiveis)
   
}

function exibirValorTotalNaTela(livros){

    const valorTotal = livros.reduce((acc, livro) => acc + livro.preco, 0)
 
    elementoComValorTotalDeLivros.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
    `
}
