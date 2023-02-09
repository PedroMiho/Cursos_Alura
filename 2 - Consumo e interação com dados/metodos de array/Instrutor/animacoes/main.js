let livros = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getbusvarLivrosDaApi()

async function getbusvarLivrosDaApi (){
    const resposta = await fetch (endpointApi)
    livros = await resposta.json()

    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)

    
}

