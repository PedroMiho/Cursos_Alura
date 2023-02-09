const botoesLivros = document.querySelectorAll('.btn')

botoesLivros.forEach( elemento => {
    elemento.addEventListener('click', (evento) =>{

        filtraLivros(evento.target.value)
    })
})

function filtraLivros(livro) {
    const livrosFiltrados = lista.filter(lista => lista.categoria === livro)
    exibirLivros(livrosFiltrados)
}