const livrosAtualizados = document.querySelector('#livros')
const valorTotalDosLivros = document.querySelector('#valor_total_livros_disponiveis')

function exibirLivros(livro) {

    livrosAtualizados.innerHTML = ''
    valorTotalDosLivros.innerHTML = ''

    livro.forEach(elemento => {
        
        let disponivel = elemento.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

        livrosAtualizados.innerHTML +=
        `
            <div class="livro">
                <img class="${disponivel}" src="${elemento.imagem}"alt="Capa do livro o Retorno do Cangaceiro JavaScript: De padrões a uma abordagem funcional" />

                <h2 class="livro__titulo">${elemento.titulo}</h2>

                <p class="livro__descricao">${elemento.autor}</p>
                <p class="livro__preco" id="preco">R$${elemento.preco.toFixed(2)}</p>
                <div class="tags">
                <span class="tag">${elemento.categoria}</span>
                </div>
            </div>
        `
        

    })
}