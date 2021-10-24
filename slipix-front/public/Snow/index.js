/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
// const now = new Date();
// const christmas = new Date('2020-12-25 00:00:00');

// const nbMsBeforeChristmas = christmas.getTime() - now.getTime();
// let nbDaysBeforeChristmas = nbMsBeforeChristmas / (1000 * 3600 * 24);
// nbDaysBeforeChristmas = Math.ceil(nbDaysBeforeChristmas);

const christmasModeWidget = document.createElement('div');
christmasModeWidget.innerText = 'Bonnes fêtes';
christmasModeWidget.style = `
position: fixed;
bottom: 20px;
right: 20px;
z-index: 1;
font-size: 16px;
text-align: center;
background: white;
border-radius: 4px;
font-weight: bold;
font-family: sans-serif;
box-shadow: 0px 0px 16px red;
padding: .5rem;
`;
document.body.appendChild(christmasModeWidget);

const enableChristmasModeBtn = document.createElement('button');
enableChristmasModeBtn.innerText = 'Activer le mode de Noël 🎅';
enableChristmasModeBtn.style = `
display: block;
border: none;
background-color: #388E3C;
border-radius: 4px;
padding: .8rem 1rem;
margin-top: .8rem;
color: white;
font-weight: bold;
cursor:pointer;
`;

christmasModeWidget.appendChild(enableChristmasModeBtn);
enableChristmasModeBtn.addEventListener('click', enableChristmasMode);
let isRunning = false;
let audioPlayer;
function enableChristmasMode() {
  isRunning = !isRunning;
  enableChristmasModeBtn.innerText = isRunning ? 'Désactiver le mode de Noël 🎅' : 'Activer le mode de Noël 🎅';
  if (isRunning) {
    //* ****** MUSIQUE DE NOEL *********
    audioPlayer = document.createElement('audio');
    audioPlayer.loop = true;
    audioPlayer.src = 'https://backend.slipix-progresser-sur-league-of-legends.fr/musique/We%20Wish%20You%20a%20Merry%20Christmas%20-%20Twin%20Musicom.mp3';
    audioPlayer.type = 'audio/mpeg';
    audioPlayer.autoplay = true;
    audioPlayer.volume = 0.1;
    // audioPlayer.style.display = 'none';

    document.body.appendChild(audioPlayer);
  }
  else {
    document.body.removeChild(audioPlayer);
  }
  initSnow(isRunning);
}

// ******* NEIGE *********
let ctx;
let canvas;
function initSnow(isRunning) {
  if (!isRunning) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.body.removeChild(canvas);
    return;
  }
  canvas = document.createElement('canvas');
  canvas.style = `
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    pointer-events: none;
    `;
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  let windowW;
  let windowH;
  const numFlakes = 242;
  let flakes = [];

  function Flake(x, y) {
    const maxWeight = 20; // poids Maximum
    const maxSpeed = 3; // vitesse maximum
    const random = +(Math.random() * 10).toFixed(0);
    this.img = createImage(random);
    this.initialX = x; // position initial
    this.x = x;
    this.y = y;
    this.horizontalMovement = randomBetween(-1, 1); // mouvement aléatoire entre -1 et 1
    this.weight = randomBetween(1, maxWeight); // taille entre 2 et poids maximum (4)
    // eslint-disable-next-line max-len
    this.alpha = (this.weight / maxWeight); // transparence définit entre leur poids et poids maximum
    this.speed = this.alpha * maxSpeed; // vitesse basé sur la transparence
    this.rotation = 0;

    this.update = function () {
      this.x += this.horizontalMovement;
      this.y += this.speed;
      this.rotation += this.horizontalMovement > 0 ? 0.01 : -0.01;
      if (this.y >= windowH) {
        this.y = this.weight;
        this.x = this.initialX;
      }
    };
  }
  function createImage(random) {
    const img = new Image();
    switch (random) {
      case (1 || 2 || 3):
        img.src = './Snow/flocon.png';
        return img;
      case 4:
        img.src = './Snow/flocon3.png';
        return img;
      case 5:
        img.src = './Snow/flocon4.png';
        return img;
      case 6:
        img.src = './Snow/flocon5.png';
        return img;
      case 7:
        img.src = './Snow/flocon6.png';
        return img;
      default:
        img.src = './Snow/flocon_or.png';
        return img;
    }
  }
  scaleCanvas();
  buildFlakes();
  loop();

  // ajuster le canvas en fonction de la taille de l'écran
  window.onresize = function () {
    scaleCanvas();
  };

  function scaleCanvas() {
    windowW = window.innerWidth;
    windowH = window.innerHeight;
    canvas.width = windowW;
    canvas.height = windowH;
  }

  function buildFlakes() {
    flakes = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numFlakes; i++) {
      const x = randomBetween(0, windowW);
      const y = randomBetween(-0, -windowH);
      const flake = new Flake(x, y);
      flakes.push(flake);
    }
  }

  function loop() {
    // clear canvas
    ctx.clearRect(0, 0, windowW, windowH);
    // draw Flakes
    for (let i = 0; i < flakes.length; i++) {
      const flake = flakes[i];
      flake.update();
      ctx.save();
      ctx.translate(flake.x + (flake.weight / 2), flake.y + (flake.weight / 2));
      ctx.rotate(flake.rotation);
      ctx.drawImage(flake.img, 0, 0, flake.weight, flake.weight);
      ctx.restore();
    }
    requestAnimationFrame(loop);
  }
}

function randomBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}
