const newYears = "1 Jan 2022";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("secs");
function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const day = Math.floor(totalSeconds / 3600 / 24);
  const hour = Math.floor((totalSeconds / 3600) % 24);
  const min = Math.floor((totalSeconds / 60) % 60);
  const sec = Math.floor(totalSeconds % 60);
  // console.log(min, sec);
  daysEl.innerHTML = day;
  hoursEl.innerHTML = formatTime(hour);
  minsEl.innerHTML = formatTime(min);
  secEl.innerHTML = formatTime(sec);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
