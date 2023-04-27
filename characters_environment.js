

var mario, bricks,clouds,mountains,enemyMushrooms,pipes,platforms,coins;

var control={
  up: "UP_ARROW",
  left: 'LEFT_ARROW',
  right: 'RIGHT_ARROW',
  revive: 32
}


var gameConfig={
  status: "start", 
  initialLifes: 4,
  moveSpeed: 5,
  enemyMoveSpeed: 1,
  gravity: 1,
  gravityEnemy: 10,
  jump:-15,
  startingPointX: 500,
  startingPointY: 0,
  screenX:1240,
  screenY:336,
  timeScores: 0,
  scores: 0,
}

function game(){
  instializeInDraw();
  moveEnviorent(mario);
  drawSprites();
  if(gameConfig.status=="start"){
    fill (0, 0, 0, 150)
    rect(0,0, gameConfig.screenX,gameConfig.screenY);
    fill(255, 255, 255);
    textSize(40);
    textAlign(CENTER);
    text("Pressione qualquer tecla direcional para iniciar o jogo", gameConfig.screenX/2, gameConfig.screenY/2);
    textSize(40);
    stroke(255);
    strokeWeight(7);
    noFill();
    changeGameStatud();
  }

}
