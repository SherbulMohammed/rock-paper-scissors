
const choices = ["rock", "paper", "scissors"]

function game() {
    //play the game
    //play five rounds
    //console based
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice () {                //get input from player

}

function computerChoice () {
     return choices[Math.floor(Math.random()*choices.length)]                                   //get random input for the computer
}

