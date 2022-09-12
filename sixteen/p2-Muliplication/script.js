"use strict";

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
// console.log(num1);
let questionE1 = document.querySelector(".question");

const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");

questionE1.textContent = `what is the multiple of ${num1} and ${num2}`;
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score === 0;
}
scoreE1.innerText = `score:${score}`;
const correctAns = num1 * num2;

formE1.addEventListener("submit", function () {
  const userAns = +inputE1.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
