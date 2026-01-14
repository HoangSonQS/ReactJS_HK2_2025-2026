let secretNumber: number = Math.trunc(Math.random() * 20) + 1
let score: number = 20

const messageEl = document.querySelector('.message') as HTMLElement
const numberEl = document.querySelector('.number') as HTMLElement
const scoreEl = document.querySelector('.score') as HTMLElement
const guessInput = document.querySelector('.guess') as HTMLInputElement
const againBtn = document.querySelector('.again') as HTMLButtonElement

againBtn.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1

    messageEl.textContent = 'Start guessing....'
    numberEl.textContent = '?'
    scoreEl.textContent = String(score)
    guessInput.value = ''

    document.body.style.backgroundColor = '#222';
    numberEl.style.width = '15rem';

    console.log('New secret number:', secretNumber);
})