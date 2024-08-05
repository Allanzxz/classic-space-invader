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

gameOverScreen.style.display = 'none';
winScreen.style.display = 'none';
scoreDisplay.style.display = 'none';

canvas.width = 1024;
canvas.height = 600;

const background = new Image();
background.src = 'src/assets/images/space.png';

const enemyBulletController = new BulletController(canvas, 4, "red", false);
const playerBulletController = new BulletController(canvas, 10, "white", true);

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

}
function displayGameOver() {

