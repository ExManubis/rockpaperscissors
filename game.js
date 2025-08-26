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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    players.forEach((player) => {
      player.classList.add("shake");
    });
    reset();
    let playerChoice = button.classList[0];
    let chooser = Math.floor(Math.random() * 3);
    let computerChoice = choices[chooser];
    let matchup = [playerChoice, computerChoice];
    console.log(matchup);
    players.forEach((player) => { 
      player.addEventListener("animationend", () => {
        player.classList.remove("shake");
        reset();
        if (playerChoice === computerChoice) {
          return document.getElementById("draw").classList.remove("hidden");
        } else {
          return winConditions[playerChoice] === computerChoice ? win.classList.remove("hidden") : loose.classList.remove("hidden");
        }
      })
    });
  });
});
