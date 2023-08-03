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

playerSelection = prompt(`Please choose rock, paper or scissors!`).toLowerCase();

console.log(`You chose ${playerSelection}`);

function play(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have tied!`);
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have lost!`);
  }
  else if (computerSelection === "rock" && playerSelection === "paper") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have won!`);
  }
  else if (computerSelection === "scissors" && playerSelection === "rock") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have won!`);
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have lost!`);
  }
  else if (computerSelection === "paper" && playerSelection === "scissors") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have won!`);

  }
  else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log(`Computer chose ${computerSelection}`);
    console.log(`You have lost!`);

  }
  else {
    console.log(`Please make a valid choice!`);
  }

}


play(computerSelection, playerSelection);





