FRICTION = 1.05;
FRAMERATE = 50;
MAX_SPEED = 30;

ballSpeed = 0;
ballHeading = NaN;

nameEntered = function (name) {
  player.name = name;
  goal.text = name + ' is playing';
}

playerMoved = function (dx, dy) {
  var playerHeading = atan2(dx, dy);
  var playerSpeed = sqrt(dx*dx + dy*dy);
  
  if (playerSpeed > 1 && isTouchingTheBall(player)) {
    ballSpeed = min(playerSpeed, MAX_SPEED);
    ballHeading = playerHeading;
    moveBall();
  }
};

moveBall = function () {
  if (ballSpeed > 1) {
    var newX = ball.x + sin(ballHeading) * ballSpeed;
    var newY = ball.y + cos(ballHeading) * ballSpeed;
    
    if (newY < 0 || newY + ball.height > innerHeight) {
      ballHeading = 180 - ballHeading;
    } else if (newX < 0 || newX + ball.width > innerWidth) {
      ballHeading = -ballHeading;
    } else {
      ball.x = newX;
      ball.y = newY;
      ballSpeed = ballSpeed / FRICTION;
    }
    
    setTimeout(moveBall, (1 / FRAMERATE) * 1000);
  }
};
