const botoes = document.querySelectorAll('.btn')

botoes.forEach( elemento => {
    elemento.addEventListener('click', (evento) => {
        
        filtraLivros(evento.target.value)

    })
})

function filtraLivros (categoria) { 

    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria) 
    exibirLivrosNaTela(livrosFiltrados)    
    
}

