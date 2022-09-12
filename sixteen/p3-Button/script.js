"use strict";
const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover", function (event) {
  const y = event.pageX - btnE1.offsetLeft;
  const x = event.pageY - btnE1.offsetTop;
  btnE1.style.setProperty("--xpos", x + "px");
  btnE1.style.setProperty("--ypos", y + "px");
});
