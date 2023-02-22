const botaoFiltrarLivrosDisponiveis = document.querySelector("#btnLivrosDisponiveis")

botaoFiltrarLivrosDisponiveis.addEventListener('click', filtraLivrosDisponiveis)

function filtraLivrosDisponiveis(){
    const livrosDisponiveisFiltrados = lista.filter(lista => lista.quantidade > 0)
    exibirLivros(livrosDisponiveisFiltrados)
    calcularPrecoTotalDosLivros(livrosDisponiveisFiltrados)
}

function calcularPrecoTotalDosLivros(livros){
    
    const valorTotal = livros.reduce((acc, livros) => acc+livros.quantidade,0)

    console.log(valorTotal)

    valorTotalDosLivros.innerHTML = `   
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
    `

}