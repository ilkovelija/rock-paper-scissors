let choice;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  //console.log (randomInt);

  if (randomInt === 0) {
    choice = "Rock";
  } else if (randomInt === 1) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}

computerSelection = getComputerChoice().toLowerCase();

//console.log(`Computer chose ${computerSelection}`);

function getPlayerSelection() {
  playerSelection = prompt(`Please choose rock, paper or scissors!`).toLowerCase()
  console.log(`You chose ${playerSelection}`);
}

getPlayerSelection();



const tie = "tie";
const win = "win";
const lose = "lose";


function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have tied!`);
    return tie;
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have lost!`);
    return lose;
  }
  else if (computerSelection === "rock" && playerSelection === "paper") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have won!`);
    return win;
  }
  else if (computerSelection === "scissors" && playerSelection === "rock") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have won!`);
    return win;
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have lost!`);
    return lose;
  }
  else if (computerSelection === "paper" && playerSelection === "scissors") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have won!`);
    return win;

  }
  else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have lost!`);
    return lose;

  }
  else {
    console.log(`Please make a valid choice!`);
  }

}


console.log(playRound(computerSelection, playerSelection));

function game() {
  for (let i = 0; i < 4; i++) {
    getPlayerSelection();
    getComputerChoice();
    playRound(computerSelection, playerSelection);
  }
}

game();





