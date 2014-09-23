import Juego from 'global';

function SetupEscenario() {}

var logo;
SetupEscenario.prototype.create = function () {
  var text = "Selecciona el escenario";
  var style = { font: "45px Arial", fill: "#ff0044", align: "center" };
  game.add.text(game.world.centerX - 300, 10, text, style);
  logo = this.add.button(this.game.world.centerX, game.world.centerY, 'button-start', this.startGame, this, 1, 2, 0);
  logo.anchor.setTo(0.5);
  console.log(Juego);
};

SetupEscenario.prototype.startGame = function () {
  this.game.state.start('game', true, false);
};

export default SetupEscenario;
