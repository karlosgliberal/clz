import Juego from 'global';

function Game() {}

var text, text2;
var juego = Juego.juego;
Game.prototype.create = function () {

  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  text = game.add.text(250, 460, "Número de jugadores: " + juego.numeroJugadores, style);
  text2 = game.add.text(250, 500, "Escenario: " + juego.escenario, style);
  console.log(Juego.sucesos);
};

Game.prototype.startGame = function () {
  this.game.state.start('setupNumeros', true, false);
};

export default Game;
