var Player = function() {
  this.money = 1000;
  this.holding = 0;
  this.score = 0;
  this.image = new Image();
  this.image.src = "";

  this.draw = function() {
    ctx.globalAlpha = 0.6;
    ctx.drawImage(this.image,mouse[0]+10,mouse[1]-this.image.width,50,50);
    ctx.globalAlpha = 1;
  }
}
var player = new Player();
// player.holding = 1;
// player.image.src = "assets/roads/roadX.png";

//Draw the player
function drawPlayer() {
  player.draw();
}

function canBuy(price) {
  if (player.money - price >= 0) {
    return true
  } else {
    return false;
  }
}
