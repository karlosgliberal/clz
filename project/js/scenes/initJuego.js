//import Juego from 'global';
import Suceso from 'prefabs/suceso';
import GestionarTiempo from 'prefabs/gestionarTiempo';

var tiempo, suceso;

function InitJuego() {}

InitJuego.prototype.create = function () {
  var siguiente = this.add.button(this.game.world.centerX, game.world.centerY, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
  tiempo = new GestionarTiempo();
  tiempo.add(8000);
  this.gestionandoColas(tiempo, 1);
};

InitJuego.prototype.crecolasTiempo = function (inicio, maxTiempo) {
  tiempo = this.game.time.create(false);
  tiempo.start();
  tiempo.onComplete.add(this.incrementCounter, this);
  tiempo.repeat(Phaser.Timer.SECOND * game.rnd.integerInRange(inicio, maxTiempo), 1, this.objectDroppingFunction, this);
};


InitJuego.prototype.startGame = function () {
  tiempo.remove();
  var tipoCarta = game.rnd.integerInRange(0, 1);
  tiempo = new GestionarTiempo();
  tiempo.add(0);
  this.gestionandoColas(tiempo, tipoCarta);
};

InitJuego.prototype.gestionandoColas = function (tiempo, tipo) {
  console.log(tipo);
  tiempo.onTerminated = function () {
    tiempo.remove();
    suceso = new Suceso(game, tipo);
    tipo = 1;
    suceso.onClose = function () {
      tiempo.add(10000);
    };
  };
};

export default InitJuego;
