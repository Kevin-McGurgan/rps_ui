// TODO - End the game when someone gets to 3

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Randomly generate the computer's play
function getComputerSelection () {
    const computerOptions = ["rock", "paper", "scissors"];
    return computerOptions[Math.floor(Math.random()*3)];
}


// Keep score and determine winner
function game () {
    while (roundCount < 5) {
        if (playerScore == 3) {
            console.log("Great job! You beat the computer.");
        } else if (computerScore == 3) {
            console.log("The computer won. Better luck next time.");
        }
    }
}

// listen for playerSelection
const rockBtn = document.querySelector("#rock");
  rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerSelection());
  });


const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerSelection());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerSelection());
});

// initialize dynamic game content
const pScore = document.querySelector("#playerScore");

const addPScore = document.createElement("p");
  addPScore.classList.add("numeral");
  addPScore.textContent = playerScore.toString();
  pScore.appendChild(addPScore);

const cScore = document.querySelector("#computerScore");

const addCScore = document.createElement("p");
  addCScore.classList.add("numeral");
  addCScore.textContent = computerScore.toString();
  cScore.appendChild(addCScore);

const banner = document.querySelector("#infoBanner")

const initBanner = document.createElement("p");
  initBanner.textContent = "Play best of 5 against the computer."
  banner.appendChild(initBanner);

function resetGame () {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
}

// play a single round
function playRound (playerSelection, computerSelection) {
    // player wins
    if (playerSelection == "rock" && computerSelection == "scissors" ||
      playerSelection == "paper" && computerSelection == "rock" ||
      playerSelection == "scissors" && computerSelection == "paper")  {
        ++playerScore;
        ++roundCount;
        addPScore.textContent = playerScore.toString();
        addCScore.textContent = computerScore.toString();
        initBanner.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    }
    // computer wins
    else if (computerSelection == "rock" && playerSelection == "scissors" || 
      computerSelection == "paper" && playerSelection == "rock" || 
      computerSelection == "scissors" && playerSelection == "paper")  {
        ++computerScore;
        ++roundCount;
        addPScore.textContent = playerScore.toString();
        addCScore.textContent = computerScore.toString();
        initBanner.textContent = "You lose. " + computerSelection + " beats " + playerSelection;
    }
    // Draw
    else {
      initBanner.textContent = "It\'s a draw. Try again.";
    }
}