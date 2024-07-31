import EnemyController from './EnemyController.js';
import BulletController from './BulletController.js';
import Player from './Player.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const instructions = document.getElementById('instructions');
const logosContainer = document.getElementById("logosContainer");
const gameOverScreen = document.getElementById("gameOverScreen");
const winScreen = document.getElementById("winScreen");
const title = document.getElementById("title");
const scoreDisplay = document.getElementById("score")
const playerButton = document.getElementById("playButton");
const gameOverScreenScore = document.getElementById("gameOverScreenScore");
const retryButton = document.getElementById("retryButton");
const restartButton = document.getElementById("restartButton");
const winScreenScore = document.getElementById("winScreenScore");
const footer = document.getElementById("footer");

canvas.width = 1024;
canvas.height = 600;

const background = new Image();
background.src = 'src/assets/images/space.png';

const enemyBulletController = new BulletController(canvas, 4, "red", false);
const playerBulletController = new BulletController(canvas, 10, "white", true);

let enemyController;
let player;
let playerScore = 0;
let isGameOver = false;
let didWin = false;
let gameInterval;

function updateScore(enemyType) {
    const scoreMap = {
        1: 50,
        2: 100,
        3: 150,
    };

    playerScore += scoreMap[enemyType] || 0;
    scoreDisplay.innerText = 'Pontuação: ${playerScore}';
}

function game() {
    canvas.style.display = "none";
    gameOverScreen.style.display = "none";
    winScreen.style.display = "none";
    title.style.display = "none";
    scoreDisplay.style.display = "none";
checkGameOver();
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
if (isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
}else {
    displayGameOver();

}
}

function displayGameOver() {
    let text = didWin ? "Voce ganhou!" : "Game Over!";
    let textOffset = didWin ? 5 : 3.6;

    ctx.fillStyle = "white";
    ctx.font = "35px 'Press Start 2P'";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 - textOffset * 36);
}




function checkGameOver() {

if (isGameOver) return;
if (enemyBulletController.collideWith(player) || enemyController.collideWith(player)) {

isGameOver = true;
}
if (enemyController.enemyRows.length === 0) {
didWin = true;
isGameOver = true;
}
}
function initgame() {
enemyBulletController = new EnemyBulletController(
    canvas,
    enemyBulletController,
    playerBulletController
);
player = new Player(canvas, 10, playerBulletController);
playerScore = 0;

}
function startGame () {
    instructions.style.display = "none";
    logosContainer.style.display = "none";
    footerContainer.style.display = "none";
    winScreen.style.display = "none";

    title.style.display = "flex";
    scoreDisplay.style.display = "flex";

    canvas.style.display = "block";
    gameInterval = setInterval(game, 1000 / 60);
    
}
playerButton.addEventListener("click", startGame);


setInterval(game, 1000 / 60);