const btnrock = document.getElementById('btn-rock')
const btnpaper = document.getElementById('btn-paper')
const btnscissors = document.getElementById('btn-scissors')
const titleuser = document.getElementById('title-user')
const titlecpu = document.getElementById('title-cpu')
const winner = document.getElementById('respuesta')
const contauser = document.getElementById('user')
const contcpu = document.getElementById('cpu')
const reload = document.getElementById('reload')
const result=document.getElementById('userchoice1')
const resultcpu=document.getElementById('jugadacpu')

btnrock.addEventListener('click', userPlayRock)
btnpaper.addEventListener('click', userPlayPaper)
btnscissors.addEventListener('click', userPlayScissors)
reload.addEventListener('click', reloadplay)

const opciones = ['piedra', 'papel', 'tijeras']
const imagenes = {
    piedra: './img/puno.png',
    papel: './img/hola.png',
    tijeras: './img/tijeras.png'
};

let userWins = 0
let cpuWins = 0

function reloadplay() {
    contauser.textContent = 0
    contcpu.textContent = 0
    winner.textContent = ""
    titleuser.textContent = 'TO WIN USER'
    titlecpu.textContent = 'TO WIN CPU'
    userWins = 0
    cpuWins = 0
    enableButtons()
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}

function showCpu(cpu) {
    if (cpu === 1) {
        return 'CPU CHOOSE ROCK'
    } else if (cpu === 2) {
        return 'CPU CHOOSE PAPER'
    } else {
        return 'CPU CHOOSE SCISSORS'
    }
}

function determineWinner(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return 'EQUALITY'
    } else if (
        (userChoice === 'piedra' && cpuChoice === 'tijeras') ||
        (userChoice === 'papel' && cpuChoice === 'piedra') ||
        (userChoice === 'tijeras' && cpuChoice === 'papel')
    ) {
        userWins++
        contauser.textContent = userWins
        return 'USER WIN'
    } else {
        cpuWins++
        contcpu.textContent = cpuWins
        return 'CPU WIN'
    }
}

function checkGameOver() {
    if (userWins === 3) {
        disableButtons();
        setTimeout(() => {
            Swal.fire({
                title: "Good job!",
                text: "USER WINS ! RELOAD PLEASE",
                icon: "success"
            });
        }, 100);
    } else if (cpuWins === 3) {
        disableButtons();
        setTimeout(() => {
            Swal.fire({
                title: "Oh no!",
                text: "CPU WINS ! RELOAD PLEASE",
                icon: "error"
            });
        }, 100);
    }
}


function disableButtons() {
    btnrock.disabled = true
    btnpaper.disabled = true
    btnscissors.disabled = true
}

function enableButtons() {
    btnrock.disabled = false
    btnpaper.disabled = false
    btnscissors.disabled = false
}

function userPlayRock() {
    const userChoice = 'piedra';
    titleuser.textContent = 'USER CHOOSE ROCK'

    let cpu = Math.round(getRandomNumber(1, 3))
    let cpuChoice
    if (cpu === 1) {
        cpuChoice = 'piedra'
    } else if (cpu === 2) {
        cpuChoice = 'papel'
    } else {
        cpuChoice = 'tijeras'
    }
    titlecpu.textContent = showCpu(cpu)
    winner.textContent = determineWinner(userChoice, cpuChoice)
    checkGameOver();
    
    // Mostrar las imágenes correspondientes
    document.getElementById('userChoice1').src = imagenes[userChoice]
    document.getElementById('cpuChoice').src = imagenes[cpuChoice]
}


function userPlayPaper() {
    const userChoice = 'papel'
    titleuser.textContent = 'USER CHOOSE PAPER'
    let cpu = Math.round(getRandomNumber(1, 3))
    let cpuChoice;
    if (cpu === 1) {
        cpuChoice = 'piedra'
    } else if (cpu === 2) {
        cpuChoice = 'papel'
    } else {
        cpuChoice = 'tijeras'
    }
    titlecpu.textContent = showCpu(cpu)
    winner.textContent = determineWinner(userChoice, cpuChoice)
    checkGameOver();
    document.getElementById('userChoice1').src = imagenes[userChoice]
    document.getElementById('cpuChoice').src = imagenes[cpuChoice]
}

function userPlayScissors() {
    const userChoice = 'tijeras'
    titleuser.textContent = 'USER CHOOSE SCISSORS'
    let cpu = Math.round(getRandomNumber(1, 3))
    let cpuChoice
    if (cpu === 1) {
        cpuChoice = 'piedra'
    } else if (cpu === 2) {
        cpuChoice = 'papel'
    } else {
        cpuChoice = 'tijeras'
    }
    titlecpu.textContent = showCpu(cpu)
    winner.textContent = determineWinner(userChoice, cpuChoice)
    checkGameOver()
    
    document.getElementById('userChoice1').src = imagenes[userChoice]
    document.getElementById('cpuChoice').src = imagenes[cpuChoice]
}
