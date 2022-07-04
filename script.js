let array = ["rock", "paper", "scissors"]

function computerPlay() {
    let item = array[Math.floor(Math.random() * array.length)] 
    return item.toUpperCase()
}

let playerScore = 0
let computerScore = 0
let roundCounter = 0

let currentWinner = '';

const choices = document.querySelector(".choices")
const scores = document.querySelector(".scores")
const winner = document.querySelector(".winner")

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        currentWinner = "no winner, it's the same"
        choices.textContent = `${currentWinner} - your choice: ${playerSelection}, computer's choice: ${computerSelection}`
        roundCounter++

        scores.textContent = `your score: ${playerScore}, computer's score: ${computerScore}`
        
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        currentWinner = "hey, you've won!! congrats!!" 
        playerScore++
        roundCounter++
        scores.textContent = `your score: ${playerScore}, computer's score: ${computerScore}`
        if (playerScore === 5) {
            winner.textContent = "YOU'VE WON THE WHOLE GAME!!!"
            return
        }

        choices.textContent = `${currentWinner} - your choice: ${playerSelection}, computer's choice: ${computerSelection}`
        
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        currentWinner = "shit! the computer has won. unlucky :["
        computerScore++
        roundCounter++
        scores.textContent = `your score: ${playerScore}, computer's score: ${computerScore}`

        if (computerScore === 5) {
            winner.textContent = "YOU'VE lost :("
            return
        }

        choices.textContent = `${currentWinner} - your choice: ${playerSelection}, computer's choice: ${computerSelection}`
        
    }
}

function getButtonText ()  {
    singleRound(this.textContent.toUpperCase(), computerPlay())
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => button.addEventListener("click", getButtonText))




//you've not added an algorithm in which when your score is 3, you beat the computer and vice versa

// function game() {

//     while (roundCounter < 5) {
//         singleRound(yourTurn(), computerPlay())
//     }
//     if (roundCounter === 5) {
//         console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`)
//         if (playerScore > computerScore) {
//             console.log("YES! YOU'VE WON THE WHOLE FUCKIN' GAME :D")
//         } else if (computerScore > playerScore) {
//             console.log("YOU'RE COMPLETELY DEFEATED")
//         }
//     } 
// }

// game()

// singleRound(yourTurn(), computerPlay())

