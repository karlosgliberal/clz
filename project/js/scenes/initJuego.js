//import Juego from 'global';
import Suceso from 'prefabs/suceso';
//import ColaTiempo from 'prefabs/colaTiempo';

var tiempo;
function InitJuego() {}
var suceso;

InitJuego.prototype.create = function () {
  var siguiente = this.add.button(this.game.world.centerX, game.world.centerY, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
  this.crecolasTiempo(2, 3);
};

InitJuego.prototype.crecolasTiempo = function (inicio, maxTiempo) {
  tiempo = this.game.time.create(false);
  tiempo.start();
  tiempo.onComplete.add(this.incrementCounter, this);
  tiempo.repeat(Phaser.Timer.SECOND * game.rnd.integerInRange(inicio, maxTiempo), 1, this.objectDroppingFunction, this);
};

InitJuego.prototype.incrementCounter = function () {
  console.log('incrementCounter');
};

InitJuego.prototype.objectDroppingFunction = function () {
  suceso = new Suceso(game, 1);
  var that =  this;
  suceso.onTerminated = function () {
    that.crecolasTiempo(1, 9);
  };
};

InitJuego.prototype.startGame = function () {
  console.log(tiempo);
  tiempo.remove();
  var aleatorio = game.rnd.integerInRange(0, 1);
  if (aleatorio === 0) {
    suceso = new Suceso(game, 1);
  } else {
    suceso = new Suceso(game, 0);
  }
};

export default InitJuego;
