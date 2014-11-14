//import Juego from 'global';
import GestionarTiempo from 'prefabs/gestionarTiempo';

var tiempo, textura;

function InitJuego() {}

InitJuego.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  var siguiente = this.add.button(this.game.world.centerX, game.world.centerY, 'siguiente', startGame, this);
  siguiente.anchor.setTo(0.5);
  tiempo = new GestionarTiempo();
  tiempo.add(240000);
};

function startGame() {
  tiempo.remove();
  tiempo = new GestionarTiempo();
  tiempo.tenerSuerte(0);
}

export default InitJuego;
