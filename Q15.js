let time = Number(prompt("Enter seconds to count down:"));
let timer;

console.log(`Starting countdown from ${time}s...`);

timer = setInterval(() => {
  console.log(`Time left: ${time}s`);
  time--;

  if (time < 0) {
    clearInterval(timer);
    console.log("Countdown Complete!");
  }
}, 1000);

// Simulated delayed check using setTimeout
setTimeout(() => {
  console.log("Cannot detect keypress in browser console, but timer works!");
}, 500);
