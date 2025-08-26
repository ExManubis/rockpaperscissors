// Selectors
const buttons = document.querySelectorAll("button");
const players = document.querySelectorAll(".player");
const win = document.getElementById("win");
const loose = document.getElementById("lose");
const result = document.querySelectorAll(".result");

const choices = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    players.forEach((player) => {
      player.classList.add("shake");
      player.addEventListener("animationend", () => {
        player.classList.remove("shake");
      });
    });
    result.forEach((res) => {
      res.classList.add("hidden");
    });
    let playerChoice = button.classList[0];
    let chooser = Math.floor(Math.random() * 3);
    let computerChoice = choices[chooser];
    let matchup = [playerChoice, computerChoice];
    if (playerChoice === computerChoice) {
      document.getElementById("draw").classList.remove("hidden");
    } else if (matchup.includes("rock") && matchup.includes("scissors")) {
      if (playerChoice === "rock") {
        win.classList.remove("hidden");
      } else {
        loose.classList.remove("hidden");
      }
    } else if (matchup.includes("paper") && matchup.includes("rock")) {
      if (playerChoice === "paper") {
        win.classList.remove("hidden");
      } else {
        loose.classList.remove("hidden");
      }
    } else if (matchup.includes("scissors") && matchup.includes("paper")) {
      if (playerChoice === "scissors") {
        win.classList.remove("hidden");
      } else {
        loose.classList.remove("hidden");
      }
    }
  });
});
