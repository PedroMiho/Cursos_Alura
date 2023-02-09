const elementoInseriLivros = document.querySelector("#livros")
const elementoComValorTotalDeLivros = document.querySelector('#valor_total_livros_disponiveis')

function exibirLivrosNaTela (listaLivros){
    
    elementoComValorTotalDeLivros.innerHTML = ''

    elementoInseriLivros.innerHTML = ''

    listaLivros.forEach( elemento => {
        
        let disponibilidade = elemento.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel'

        elementoInseriLivros.innerHTML += `
            <div class="livro">
            
                <img class="${disponibilidade}" src=${elemento.imagem} alt="${elemento.titulo}" />

                <h2 class="livro__titulo">
                    ${elemento.titulo}
                </h2>

                <p class="livro__descricao">${elemento.autor}</p>

                <p class="livro__preco" id="preco">R$${elemento.preco.toFixed(2)}</p>

                <div class="tags">
                    <span class="tag">${elemento.categoria}</span>
                </div>

            </div>
        `
         
    })
}

