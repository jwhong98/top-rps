let computerScore = 0,
  playerScore = 0;

const results = document.querySelector("#results");
const comp = document.querySelector("#compScore");
const play = document.querySelector("#playerScore");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const updateResult = (result) => {
  const resultMessage = document.createElement("p");
  resultMessage.textContent = result;
  results.appendChild(resultMessage);
};

const playRound = (playerSelection, computerSelection) => {
  let result;
  let player = playerSelection.toLowerCase();

  if (player === computerSelection) {
    result = "Draw";
    updateResult(result);
    return result;
  }
  switch (player) {
    case "rock":
      if (computerSelection === "paper") {
        result = "You Lose! Paper beats Rock";
        computerScore++;
      } else {
        result = "You Win! Rock beats Scissors";
        playerScore++;
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper";
        computerScore++;
      } else {
        result = "You Win! Paper beats Rock";
        playerScore++;
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors";
        computerScore++;
      } else {
        result = "You Win! Scissors beats Paper";
        playerScore++;
      }
      break;
  }
  updateResult(result);
  comp.textContent = `Computer Score: ${computerScore}`;
  play.textContent = `Player Score: ${playerScore}`;
  playerScore === 5
    ? alert("Player wins!")
    : computerScore === 5
    ? alert("Computer Wins!")
    : "";
  return result;
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  })
);

// const game = () => {
//     for(let i = 0; i < 5 ; i++) {
//         let playerMove = prompt('Rock, Paper, Scissors?')
//         console.log(playRound(playerMove, getComputerChoice()))
//     }
//     return playerScore > computerScore ? `You Win! ${playerScore} : ${computerScore}` :` You Lose! ${playerScore} : ${computerScore}`
// }

// console.log(game());
