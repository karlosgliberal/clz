//import Juego from 'global';
import GestionarTiempo from 'prefabs/gestionarTiempo';

var tiempo;

function InitJuego() {}

InitJuego.prototype.create = function () {
  var siguiente = this.add.button(this.game.world.centerX, game.world.centerY, 'siguiente', startGame, this);
  siguiente.anchor.setTo(0.5);
  tiempo = new GestionarTiempo();
  tiempo.add(8000);
};

function startGame() {
  tiempo.remove();
  tiempo = new GestionarTiempo();
  tiempo.tenerSuerte(0);
}

export default InitJuego;
