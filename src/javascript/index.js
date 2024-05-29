import EnemyController from './EnemyController.js';
import BulletController from './BulletController.js';
import Player from './Player.js';

const canvas = document.getElementById('game');

const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = 'src/assets/images/space.png';

const enemyBulletController = new BulletController (canvas, 4, "red", false);

const BulletController = new Player (canvas, 10, "white", true);

const enemyController = new EnemyController (canvas, enemyBulletController, playerBulletController);

const player = new Player (canvas, 10, playerBulletController); 

let isGameOver = false;
let didWin = false;

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

function displayGameOver() {
    let text = didWin ? "Você Ganhou!" : "Game Over"

    let textOffset = didWin ? 5 : 3.6;
    ctx.fillStyle = "White";
    ctx.font = "35px 'Press Start 2P'";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2)   
}

function checkGameOver() {
    if(isGameOver) {
        return;
}
    if(enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }
    if(enemyController.collideWith(player)) {
        isGameOver = true;
    }
    if(enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}