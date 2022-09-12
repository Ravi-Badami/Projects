const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let s = new Date().getSeconds();
  let m = new Date().getMinutes();
  let ampm = "AM";
  if (h === 12) {
    h = 12;
    ampm = "PM";
  } else if (h > 12) {
    h = h - 1;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hourE1.textContent = h;
  minuteE1.textContent = m;
  secondE1.textContent = s;
  ampmE1.innerTxt = ampm;
  setTimeout(function () {
    updateClock();
  }, 1000);
}
updateClock();
