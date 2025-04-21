const gameDiplay = document.querySelector("display");
const buttons = document.querySelectorAll("button");
const humanScoreUI = document.querySelector("#humanScore");
const computerScoreUI = document.querySelector("#computerScore");
const winnerUI = document.querySelector("#winner");
const humanChoiceUI = document.querySelector("#humanChoice");
const computerChoiceUI = document.querySelector("#computerChoice");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener("click", playRound));

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
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

function humanWins() {
  humanScoreUI.textContent = ++humanScore;
  winnerUI.textContent = "You Win";
}

function computerWins() {
  computerScoreUI.textContent = ++computerScore;
  winnerUI.textContent = "Computer Wins";
}

function checkForFinalScore() {
  if (humanScore == 5) {
    winnerUI.textContent = "You won the game";
    endGame();
  } else if (computerScore == 5) {
    winnerUI.textContent = "Computer Won The Game";
    endGame();
  }

  console.log(humanScore);
  console.log(computerScore);
}

function playRound(e) {
  let humanChoice = "";
  let computerChoice = alterComputerInput(getComputerChoice());

  switch (e.target.classList.value) {
    case "rock":
      humanChoice = "rock";
      break;
    case "paper":
      humanChoice = "paper";
      break;
    case "scissors":
      humanChoice = "scissors";
      break;
  }

  humanChoiceUI.textContent = humanChoice;
  computerChoiceUI.textContent = computerChoice;

  if (humanChoice === computerChoice) {
    winnerUI.textContent = "Tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanWins();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanWins();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanWins();
  } else {
    computerWins();
  }

  checkForFinalScore();
}

function endGame() {
  buttons.forEach((button) => button.setAttribute("disabled", ""));
}
