"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Answer!";

// // console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = "10";
// document.querySelector(".score").textContent = "450";
// document.querySelector(".guess").value = 24;
// console.log(document.querySelector(".guess").value);
let number = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = number;
// const score=
const score = document.querySelector(".score");
console.log(score);
let ravi = 20;
let highScore = 0;

const message = document.querySelector(".message");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  //   WHEN PLAYER DOES NOT GUESS
  if (!guess) {
    document.querySelector(".message").textContent = "guess something";
  }

  //   WHEN GUESS IS HIGHER
  else if (guess > number) {
    if (ravi > 1) {
      message.textContent = "too high";
      ravi--;
      score.textContent = ravi;
    } else {
      message.textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }

  //   WHEN GUESS IS EQUAL
  else if (guess === number) {
    message.textContent = "correct";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (highScore < ravi) {
      highScore = ravi;

      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //   WHEN GUESS IS LOWER
  else if (guess < number) {
    if (ravi > 1) {
      message.textContent = "too low";
      ravi--;
      score.textContent = ravi;
    } else {
      message.textContent = "you lost";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  ravi = 20;
  score.textContent = ravi;

  // document.querySelector(".number").textContent = "?";
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  message.textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
