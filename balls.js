class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radio = 10;
    this.dirX = Math.random() * 2 - 1;
    this.dirY = Math.random() * 2 - 1;
    this.velocity = Math.random() * 1 - 1;
  }
  paint() {
    context.beginPath();
    context.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    context.fill();
    context.closePath();
  }

  moveBall() {
    this.x += this.dirX * this.velocity;
    this.y += this.dirY * this.velocity;
    if (this.x + this.radio > canvas.width || this.x < 0) {
      this.dirX *= -1;
    }

    if (this.y + this.radio > canvas.width || this.y < 0) {
      this.dirY *= -1;
    }
  }
}
