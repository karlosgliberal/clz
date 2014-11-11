import Juego from 'global';

function Game() {}

var text;
var juego = Juego.juego;
Game.prototype.create = function () {

  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  text = game.add.text(250, 420, "Superviviente: " + juego.superviviente, style);
  text = game.add.text(250, 460, "Número de jugadores: " + juego.numeroJugadores, style);
  text = game.add.text(250, 500, "Eres el Jugador: " + juego.jugadorNumero, style);
  text = game.add.text(250, 540, "Escenario: " + juego.escenario, style);

  var siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);

};

Game.prototype.startGame = function () {
  this.game.state.start('initJuego', true, false);
};

export default Game;
