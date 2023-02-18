import ehUmCpf from "./validaCPF.js";
import ehMaiorDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        'nome': e.target.elements["nome"].value,
        'email': e.target.elements["email"].value,
        'rg': e.target.elements["rg"].value,
        'cpf': e.target.elements["cpf"].value,
        'aniversario': e.target.elements["aniversario"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas))
    window.location.href = './abrir-conta-form-2.html'

})



camposDoFormulario.forEach((elemento) => {
    elemento.addEventListener("blur", () => verificaCampo(elemento))
    elemento.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(elemento){
    let mensagem = ''
    elemento.setCustomValidity('')
    if(elemento.name == "cpf" && elemento.value.length >= 11){
        ehUmCpf(elemento)
    }

    if(elemento.name == "aniversario" && elemento.value != ""){
        ehMaiorDeIdade(elemento)
    }

    tiposDeErros.forEach(erro => {
        if(elemento.validity[erro]){
            mensagem = mensagens[elemento.name][erro]
        }
    })

    const mensagemErro = elemento.parentNode.querySelector(".mensagem-erro")
    const validorDeInput = elemento.checkValidity()

    if(!validorDeInput){
        mensagemErro.textContent = mensagem
    }else{
        mensagemErro.textContent = ''
    }
}

