class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.road = new Image();
    this.road.src = '../images/road.png';
    this.car = new Car(this.ctx);
    this.frame = 0;
    this.obstacles = [];
  }

  createObstacle = () => {
    this.obstacles.push(new Obstacle(this.ctx));
  };

  drawRoad = () => {
    this.ctx.drawImage(this.road, 0, 0, canvas.width, canvas.height);
  };

  //   checkCollision = (obstacle) => {
  //     if (
  //       this.car.x + this.car.carWidth > obstacle.x &&
  //       obstacle.x + obstacle.obsWidth > this.car.x &&
  //       this.car.y + this.car.carHeight > obstacle.y &&
  //       obstacle.y + obstacle.obsHeight > this.car.y
  //     ) {
  //       this.obstacles.splice(idx, 1);
  //     }
  //   };

  //   handleScore = () = {
  //       if (obstacle.obsHeight > canvas.height)
  //   }

  drawEverything = () => {
    this.drawRoad();

    this.car.drawCar();
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
      obstacle.moveObstacle();
    });
    this.frame++;
    if (this.frame % 50 === 0) this.createObstacle();

    requestAnimationFrame(this.drawEverything);
  };
}
