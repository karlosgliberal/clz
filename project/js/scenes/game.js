import RotateLogo from 'prefabs/rotate-logo';

function Game() {}

var logo;
Game.prototype.create = function () {
  logo = new RotateLogo(
    this.game,
    this.game.width / 2, this.game.height / 2,
    0.5
  );

  this.add.existing(logo);
  this.game.input.onDown.add(this.startGame, this);
};

Game.prototype.startGame = function () {
  this.game.state.start('setupNumeros', true, false);
};

export default Game;
