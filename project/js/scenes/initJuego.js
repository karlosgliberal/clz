//import Juego from 'global';
import Suceso from 'prefabs/suceso';
import GestionarTiempo from 'prefabs/gestionarTiempo';

var tiempo;
function InitJuego() {}
var suceso;

InitJuego.prototype.create = function () {
  var siguiente = this.add.button(this.game.world.centerX, game.world.centerY, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
  tiempo = new GestionarTiempo();
  tiempo.add(8000);

  tiempo.onTerminated = function () {
    tiempo.remove();
    suceso = new Suceso(game, 1);
    suceso.onClose = function () {
      tiempo.add(10000);
    };
  };
};

InitJuego.prototype.crecolasTiempo = function (inicio, maxTiempo) {
  tiempo = this.game.time.create(false);
  tiempo.start();
  tiempo.onComplete.add(this.incrementCounter, this);
  tiempo.remove();
  tiempo.repeat(Phaser.Timer.SECOND * game.rnd.integerInRange(inicio, maxTiempo), 1, this.objectDroppingFunction, this);
};


InitJuego.prototype.startGame = function () {
  tiempo.remove();
  var aleatorio = game.rnd.integerInRange(0, 1);
  if (aleatorio === 0) {
    suceso = new Suceso(game, 1);
  } else {
    suceso = new Suceso(game, 0);
  }
};

export default InitJuego;
