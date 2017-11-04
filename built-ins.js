function toNumber(string) {
  return Number(string.replace(/[^\d\.]+/, ''));
}
function sin(n) {
  return Math.sin(n * Math.PI / 180);
}
function cos(n) {
  return Math.cos(n * Math.PI / 180);
}
function atan2(x, y) {
  return Math.atan2(x, y) * 180 / Math.PI;
}
sqrt = Math.sqrt;
min = Math.min;
floor = Math.floor;
ball = Object.defineProperties({}, {
  e : { get : function () { return document.getElementById('ball'); } },
  x : {
    get : function () { return toNumber(ball.e.style.left); },
    set : function (x) { ball.e.style.left = x; }
  },
  y : {
    get : function () { return toNumber(ball.e.style.top); },
    set : function (y) { ball.e.style.top = y; }
  },
  width : { get : function () { return ball.e.width; } },
  height : { get : function () { return ball.e.height; } }
});
player = Object.defineProperties({
  width : 28, height : 32
}, {
  e : { get : function () { return document.getElementById('player'); } },
  x : {
    get : function () { return toNumber(player.e.style.left); },
    set : function (x) { player.e.style.left = x; }
  },
  y : {
    get : function () { return toNumber(player.e.style.top); },
    set : function (y) { player.e.style.top = y; }
  },
  name : { set : function (s) { document.getElementById('name').textContent = s; } }
});
goal = Object.defineProperties({}, {
  e : { get : function () { return document.getElementById('goal'); } },
  x : { get : function () { return goal.e.getBoundingClientRect().x; } },
  y : { get : function () { return goal.e.getBoundingClientRect().y; } },
  width : { get : function () { return goal.e.getBoundingClientRect().width; } },
  height : { get : function () { return goal.e.getBoundingClientRect().height; } },
  text : { set : function (s) { goal.e.textContent = s; } }
});
function isTouchingTheBall(rect) {
  return ball.x < rect.x + rect.width && ball.x + ball.width > rect.x &&
    ball.y < rect.y + rect.height && ball.height + ball.y > rect.y;
}
document.onmousemove = function (e) {
  var dx = !isNaN(player.x) && (e.clientX - player.x);
  var dy = !isNaN(player.y) && (e.clientY - player.y);
  player.x = e.clientX;
  player.y = e.clientY;
  if (dx || dy) {
    playerMoved(dx, dy);
  }
};
window.onload = function () {
  var nameInput = document.getElementById('name-input');
  nameInput.onkeydown = function (e) {
    if (e.key == 'Enter') {
      nameInput.hidden = true;
      nameEntered(nameInput.value);
    }
  }
}