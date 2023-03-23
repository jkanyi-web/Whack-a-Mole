/** @format */

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');
let timerId = null;
let hitPosition;
let result = 0;
let currentTime = 60;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition === null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 800);
}

moveMole();

let countDownTimerId = setInterval(countDown, 1000);

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('Game Over! your final score is ' + result);
  }
}
