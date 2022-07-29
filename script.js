let array = ["rock", "paper", "scissors"]

function computerPlay() {
    let item = array[Math.floor(Math.random() * array.length)] 
    return item.toUpperCase()
}

let playerScore = 0
let computerScore = 0
let roundCounter = 0

const situation = document.querySelector(".situation")
const yourScore = document.querySelector(".yours")
const pcScore = document.querySelector(".computer")


function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundCounter++
        situation.textContent = "No winners, your choices are same."   
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++
        roundCounter++

        yourScore.textContent = `Your score : ${playerScore}`
        situation.textContent = `You won this round. Computer's selection : ${computerSelection}` 


        if (playerScore === 5) {
            situation.textContent = `You have reached 5, so you're the winner of the game. Computer's selection : ${computerSelection}`
            restart();
        } 

    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++
        roundCounter++

        pcScore.textContent = `Computer's score : ${computerScore}`
        situation.textContent = `Computer won this round. Computer's selection : ${computerSelection}`


        if (computerScore == 5) {
            situation.textContent = `Computer has reached 5, so it's the winner of the game. Computer's selection : ${computerSelection}`
            restart();
            // rock.removeEventListener("click", getButtonText)
            // paper.removeEventListener("click", getButtonText)
            // scissors.removeEventListener("click", getButtonText)
        }

    }
}

const restartBtn = document.createElement("button")

function restart() {
    situation.appendChild(restartBtn)
    restartBtn.textContent = "Restart the game"
    restartBtn.classList.add("restartBtn")

    rock.addEventListener("click", getButtonText)
    paper.addEventListener("click", getButtonText)
    scissors.addEventListener("click", getButtonText)

}

restartBtn.addEventListener("click", reset)

function reset() {
    playerScore = 0;
    computerScore = 0;
    yourScore.textContent = `Your score : ${playerScore}`
    pcScore.textContent = `Computer's score : ${computerScore}`
    situation.textContent = "Welcome to the game!";
}

function getButtonText ()  {
    if (this.className === "rock") {
        singleRound(this.className.toUpperCase(), computerPlay())   
    } else if (this.className === "paper") {
        singleRound(this.className.toUpperCase(), computerPlay())   
    } else if (this.className === "scissors") {
        singleRound(this.className.toUpperCase(), computerPlay())   
    } 

}

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

rock.addEventListener("click", getButtonText)
paper.addEventListener("click", getButtonText)
scissors.addEventListener("click", getButtonText)


