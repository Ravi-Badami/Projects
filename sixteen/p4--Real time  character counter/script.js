const textareaEl = document.getElementById("textarea");
document.getElementById("textarea").addEventListener("keyup", () => {
  updateCounter();
});
updateCounter();
function updateCounter() {
  let textLength = Number(textareaEl.value.length);
  document.querySelector(".total-counter").textContent = textLength;

  document.querySelector(".remaining-counter").textContent =
    textareaEl.getAttribute("maxlength") - textLength;
}
