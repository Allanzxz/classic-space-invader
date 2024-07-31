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

canvas.width = 1024;
canvas.height = 600;

const background = new Image();
background.src = 'src/assets/images/space.png';

const enemyBulletController = new BulletController(canvas, 4, "red", false);
const playerBulletController = new BulletController(canvas, 10, "white", true);

const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
const player = new Player(canvas, 10, playerBulletController);

let isGameOver = false;
let didWin = false;

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
    let text = didWin ? "Voçe ganhou!" : "Game Over!";
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
setInterval(game, 1000 / 60);