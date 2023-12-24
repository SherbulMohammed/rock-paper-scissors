
const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    } 
    displayWins();                                      
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner)
}

function playerChoice() {               
   let input = prompt('Type Rock, Paper or Scissors');
   while (input == null) {
    input = prompt('Type Rock, Paper or Scissors');
   }
   input = input.toLowerCase();
   let check = validateInput(input);
   while (check == false) {
   input = prompt(
    'Type Rock, Paper or Scissors. Are you spelling it right?'
    );
    input = input.toLowerCase()
    check = validateInput(input);
}
return input;
}


function computerChoice() {
     return choices[Math.floor(Math.random() * choices.length)]                               
}

function validateInput(choice) {
    return choices.includes(choice)

}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return "Ooo, Its a Tie";
    } else if(
    (choiceP === "rock" && choiceC =='scissors') || 
    (choiceP === "paper" && choiceC =="rock") || 
    (choiceP === "scissors" && choiceC =="paper") 
    ) {
        return "You win";
    } else{
        return "Computer wins";
    }
}

function displayWins() {
    let playerWins = winners.filter((item) => item == "You win").length;
    let computerWins = winners.filter((item) => item == "Computer wins").length;
    let ties = winners.filter((item) => item == "Ooo, Its a Tie").length;
    console.log("Results:");
    console.log("You:", playerWins);
    console.log("Computer:", computerWins);
    console.log("Ties:", ties);

    }

function displayRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('You chose:' ,playerChoice);
    console.log('Computer chose:' ,computerChoice);
    console.log(winner, 'won the round');
}


game();
