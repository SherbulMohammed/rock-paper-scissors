
const choices = ["rock", "paper", "scissors"]

function game() {
    for(let i = 0; i <= 5; i++) {
        playRound();
    }                                       
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection,computerSelection);
    console.log(winner);
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



game();
