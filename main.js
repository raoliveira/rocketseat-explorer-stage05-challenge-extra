// const randomNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const button = document.querySelector("button")
const imgOpen = document.querySelector('.screen1 img')
const imgOpened = document.querySelector('.screen2 img')


imgOpen.addEventListener('click', handleClickOpen);
button.addEventListener('click', handleClickNew);
document.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        handleClickNew(e);
    }
});


const phrases = [
                "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
                "A vida é como um biscoito da sorte, nunca se sabe o que vai vir por dentro.",
                "O sucesso é um biscoito da sorte, só quem trabalha duro consegue pegar.",
                "A felicidade é um biscoito da sorte que precisamos encontrar e saborear todos os dias.",
                "A amizade é um biscoito da sorte, que nos traz sempre sorrisos e alegria.",
                "A perseverança é o ingrediente secreto para o sucesso, assim como o xarope de bordo para o biscoito da sorte.",
                "A sorte é um biscoito que precisamos merecer, com muito trabalho e dedicação.",
                "O amor é um biscoito da sorte que precisamos compartilhar com aqueles que amamos.",
                "A sorte chega quando menos esperamos, assim como um biscoito da sorte inesperado.",
                "A vida é feita de pequenos momentos felizes, como o sabor de um biscoito da sorte recém saído do forno.",
                "Não espere pelo destino, faça a viagem valer a pena com perseverança, paixão e coragem."
                ];

function handleClickOpen(e) {
    
    
    e.preventDefault()
    const  randomNumber = Math.round(Math.random() * 10)

    const textPhrase = document.querySelector(".luck p")
    textPhrase.innerHTML = `<p>${phrases[randomNumber]}</p>`
    
    toggleScreen()
}

function handleClickNew(e) {
    e.preventDefault()

    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}