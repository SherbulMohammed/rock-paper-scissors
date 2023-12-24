
const choices = ["rock", "paper", "scissors"]

function game() {
    playRound();                                       
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
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
}


function computerChoice() {
     return choices[Math.floor(Math.random() * choices.length)]                               
}

function validateInput(choice) {
    return choices.includes(choice)

}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC) {
        return 'Its a Tie';
    } else if(choiceP === 'rock' && choiceC =='scissors') {
        return 'You win';
    }
}



game();
