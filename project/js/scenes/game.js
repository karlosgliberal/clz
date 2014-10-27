import RotateLogo from 'prefabs/rotate-logo';
import Juego from 'global';

function Game() {}

var logo, text, text2;
var juego = Juego.juego;
Game.prototype.create = function () {
  logo = new RotateLogo(
    this.game,
    this.game.width / 2, this.game.height / 2,
    0.5
  );
  this.add.existing(logo);
  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  text = game.add.text(250, 460, "Número de jugadores: " + juego.numeroJugadores, style);
  text2 = game.add.text(250, 500, "Escenario: " + juego.escenario, style);
};

Game.prototype.startGame = function () {
  this.game.state.start('setupNumeros', true, false);
};

export default Game;
