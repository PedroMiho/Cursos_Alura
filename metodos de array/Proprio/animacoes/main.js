let lista = []
const api = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getListaLivros()

async function getListaLivros(){

    const resposta = await fetch(api)
    lista = await resposta.json()

    exibirLivros(lista)
}
