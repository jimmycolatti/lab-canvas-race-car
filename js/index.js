window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const game = new Game(ctx);
    game.drawEverything();

    document.addEventListener('keydown', (event) => {
      game.car.controls(event.code);
    });
  }
};
