const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let balls = [];

for (let i = 0; i < 20; i++) {
  balls.push(new Ball(canvas.width / 2, canvas.height / 2));
}

function animation() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    balls.forEach((ball2) => {
      let dx = ball2.x - ball.x;
      let dy = ball2.y - ball.y;
      let dist = Math.sqrt(dx ** 2 + dy ** 2);

      if (dist < 300) {
        context.beginPath();
        context.moveTo(ball.x, ball.y);
        context.lineTo(ball2.x, ball2.y);
        context.stroke();
        context.closePath();
      }
    });
    ball.paint();
    ball.moveBall();
  });
  requestAnimationFrame(animation);
}

animation();
