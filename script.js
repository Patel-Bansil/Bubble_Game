let timer = 60;
let Score = 0;
let hitrn;

function Bubble_Maker() {
  let clutter = "";
  for (let i = 1; i <= 102; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubbel">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function startTimer() {
  let run = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(run);
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`
    }
  }, 1000);
}


function increaseScore() {
  Score += 10;
  document.querySelector("#scoreVal").textContent = Score;
}

document.querySelector("#pbtm").addEventListener("click", (dets) => {
  let clickNumber = Number(dets.target.textContent);
  if (clickNumber === hitrn) {
    increaseScore();
    Bubble_Maker();
    getNewHit();
  }
});

startTimer();
Bubble_Maker();
getNewHit();
