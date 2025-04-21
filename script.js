let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
  return window.prompt("Rock, Paper, Scissors!!!");
}

function alterComputerInput(givenInput) {
  switch (givenInput) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function alterHumanInput(givenInput) {
  return givenInput.toLowerCase();
}

function humanWins() {
  humanScore++;
  console.log("You Won!!!");
}

function computerWins() {
  computerScore++;
  console.log("Computer Won!!!");
}

function repeatFiveRounds() {
  for (let i = 0; i < 5; i++) {
    playRound(
      alterHumanInput(getHumanChoice()),
      alterComputerInput(getComputerChoice())
    );
  }
}

function displayFinalScore() {
  console.clear();

  if (humanScore > computerScore) {
    console.log("You Won The Game!!!");
  } else if (computerScore > humanScore) {
    console.log("Computer Won The Game");
  } else {
    console.log("Game is Tie");
  }

  console.log(humanScore);
  console.log(computerScore);
}

function playRound(humanChoice, computerChoice) {
  console.clear();

  console.log(humanChoice);
  console.log(computerChoice);

  if (humanChoice === computerChoice) {
    console.log("Tie");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanWins();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanWins();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanWins();
  } else {
    computerWins();
  }
}

function playGame() {
  repeatFiveRounds();
  displayFinalScore();
}

playGame();
