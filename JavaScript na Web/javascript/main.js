var pow = document.querySelector(".tecla_pom")

pow.addEventListener("click", (event) => {
    event.preventDefault();    
    document.querySelector('#som_tecla_pom').play()
    console.log('pedro')
})

let clap = document.querySelector(".tecla_clap")

clap.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_clap').play()
    
})

let tim = document.querySelector(".tecla_tim")

tim.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_tim').play()    
})

let puff = document.querySelector(".tecla_puff")

puff.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_puff').play()
})

let splash = document.querySelector(".tecla_splash")

splash.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_splash').play()
})

let toim = document.querySelector(".tecla_toim")

toim.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_toim').play()   
})

let psh = document.querySelector(".tecla_psh")

psh.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_psh').play()
})

let tic = document.querySelector(".tecla_tic")

tic.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_tic').play()    
})

let tom = document.querySelector(".tecla_tom")

tom.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#som_tecla_tom').play()    
})
