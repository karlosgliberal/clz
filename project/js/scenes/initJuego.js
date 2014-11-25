import Juego from 'global';
import GestionarTiempo from 'prefabs/gestionarTiempo';
import Vidas from 'prefabs/vidas';
import Superviviente from 'prefabs/superviviente';

var tiempo, textura, vidas, superviviente;
var juego = Juego.juego;

function InitJuego() {}

InitJuego.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'fondoJuego');
  var siguiente = this.add.button(this.game.world.centerX + 250, game.world.centerY + 250, 'siguiente', startGame, this);
  siguiente.anchor.setTo(0.5);

  superviviente = new Superviviente(game, juego.superviviente);

  vidas =  new Vidas(game);

  tiempo = new GestionarTiempo();
  tiempo.add(240000);
};

function startGame() {
  tiempo.remove();
  tiempo = new GestionarTiempo();
  tiempo.tenerSuerte(0);
}

export default InitJuego;
