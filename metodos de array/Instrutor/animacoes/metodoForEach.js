const elementoInseriLivros = document.querySelector("#livros")

function exibirLivrosNaTela (listaLivros){
    
    elementoInseriLivros.innerHTML = ''

    listaLivros.forEach( elemento => {
        
        elementoInseriLivros.innerHTML += `
            <div class="livro">
            
                <img class="livro__imagens" src=${elemento.imagem} alt="${elemento.titulo}" />

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
