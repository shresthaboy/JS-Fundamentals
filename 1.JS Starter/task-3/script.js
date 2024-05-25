const timer = document.getElementById("DisplayTime");
let tinMin = prompt("Enter time in minutes");


if (isNaN(tinMin) || tinMin === null || tinMin === "") {
  alert("Please enter a number");
} else {
    tinMin = Number(tinMin);
  //1. change to seconds
  tinMin = Math.floor(tinMin * 60);
  let time = setInterval(() => {
    if (tinMin <= 0) {
      alert("Times Up!");
      clearInterval(time);
    }
    tinMin -= 1;
    timer.innerHTML += `<div>The countdown is at ${tinMin} seconds</div>`;
    console.log(tinMin);
  }, 1000);
}
