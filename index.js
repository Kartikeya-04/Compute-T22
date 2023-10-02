//
const holes = [...document.querySelectorAll('.hole')];
const scoreboard = document.querySelector('.score');
const audio = new Audio('./hit.mp3');
let score = 0;

function start() {
  let time = 0;

  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  const imgs = document.createElement('img');

  imgs.classList.add('mole');
  imgs.src = 'images/mole.png';
  hole.appendChild(imgs);

  imgs.addEventListener('click', () => {
    audio.play();
    score += 1;
    scoreboard.textContent = 'SCORE : ' + score;
    clearTimeout(time);
    setTimeout(() => {
      hole.removeChild(imgs);
      start();
    }, 550);
  });

  time = setTimeout(() => {
    hole.removeChild(imgs);
    start();
  }, 1000);
}

start();
