const gameView = document.getElementById("gameView");
const ctx = gameView.getContent('2d');
const gameHeight = 200;
const gameWidth = 200;
ctx.fillRect = "blue";
ctx.fillRect(0, 0, gameWidth, gameHeight);