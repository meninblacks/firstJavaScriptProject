let array = ["rock", "paper", "scissors"]

function computerPlay() {
    let item = array[Math.floor(Math.random() * array.length)] 
    return item.toUpperCase()
}

function yourTurn() {
    let yourSelection = window.prompt("it's your turn. what do you choose to play with?: ")
    // yourselection variable is not in the global scope, it might be a problem 
    if (yourSelection.toUpperCase() !== "ROCK" && yourSelection.toUpperCase() !== "PAPER" && yourSelection.toUpperCase() !== "SCISSORS") {
        alert("you have to type one of these three options: 'rock', 'paper' and 'scissors'")
    } else if (yourSelection.toUpperCase() === "ROCK" || yourSelection.toUpperCase() === "PAPER" || yourSelection.toUpperCase() === "SCISSORS") {
        return yourSelection.toUpperCase()
    }
}

let playerScore = 0
let computerScore = 0
let roundCounter = 0

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == undefined) {
        console.log("wrongg!! you've typed in something wrong.")
    } else if (playerSelection === computerSelection) {
        console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`)
        console.log("no winner, it's the same")
        console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`)
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`)
        console.log("hey, you've won!! congrats!!")
        playerScore++
        roundCounter++
        console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`)
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" || playerSelection === "ROCK" && computerSelection === "PAPER" || playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log(`playerSelection: ${playerSelection}, computerSelection: ${computerSelection}`)
        console.log("shit! the computer has won. unlucky :[")
        computerScore++
        roundCounter++
        console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`)
    }

}

//you've not added an algorithm in which when your score is 3, you beat the computer and vice versa

function game() {
    // for (i = 0; i < 10; i++) {
    //     singleRound(yourTurn(), computerPlay())
    //     if (roundCounter === 5) {
    //         console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`)
    //         if (playerScore > computerScore) {
    //             console.log("YES! YOU'VE WON THE WHOLE FUCKIN' GAME :D")
    //         } else if (computerScore > playerScore) {
    //             console.log("YOU'RE COMPLETELY DEFEATED")
    //         }
    //     }
    // }

    while (roundCounter < 5) {
        singleRound(yourTurn(), computerPlay())
    }
    if (roundCounter === 5) {
        console.log(`playerScore: ${playerScore}, computerScore: ${computerScore}`)
        if (playerScore > computerScore) {
            console.log("YES! YOU'VE WON THE WHOLE FUCKIN' GAME :D")
        } else if (computerScore > playerScore) {
            console.log("YOU'RE COMPLETELY DEFEATED")
        }
    }
}

game()


