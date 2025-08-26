// Selectors
const buttons = document.querySelectorAll("button");
const players = document.querySelectorAll(".player");
const win = document.getElementById("win");
const loose = document.getElementById("lose");
const result = document.querySelectorAll(".result");

const choices = ["rock", "paper", "scissors"];

const winConditions = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper",
};

const reset = () => {
  result.forEach((res) => {
    res.classList.add("hidden");
  });
}

const winCondition = (computerChoice) => {
  win.innerHTML = `<h1>PC chose ${computerChoice}, you win!</h1>`;
  win.classList.remove("hidden");
};

const looseCondition = (computerChoice) => {
  loose.innerHTML = `<h1>PC chose ${computerChoice}, you lose!</h1>`;
  loose.classList.remove("hidden");
};

const drawCondition = (computerChoice) => {
  draw.innerHTML = `<h1>PC chose ${computerChoice}, it's a draw!</h1>`;
  draw.classList.remove("hidden");
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    players.forEach((player) => {
      player.classList.add("shake");
    });
    reset();
    let playerChoice = button.classList[0];
    let chooser = Math.floor(Math.random() * 3);
    let computerChoice = choices[chooser];
    players.forEach((player) => { 
      player.addEventListener("animationend", () => {
        player.classList.remove("shake");
        reset();
        if (playerChoice === computerChoice) {
          return drawCondition(computerChoice);
        } else {
          return winConditions[playerChoice] === computerChoice ? winCondition(computerChoice) : looseCondition(computerChoice);
        }
      })
    });
  });
});
