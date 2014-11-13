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

InitJuego.prototype.crecolasTiempo = function (inicio, maxTiempo) {
  tiempo = this.game.time.create(false);
  tiempo.start();
  tiempo.onComplete.add(this.incrementCounter, this);
  tiempo.repeat(Phaser.Timer.SECOND * game.rnd.integerInRange(inicio, maxTiempo), 1, this.objectDroppingFunction, this);
};

function startGame() {
  tiempo.remove();
  tiempo = new GestionarTiempo();
  tiempo.tenerSuerte(0);
  console.log("startGame");
}

// InitJuego.prototype.gestionandoColas = function (tiempo, tipo) {
//   console.log(tipo);
//   tiempo.onTerminated = function () {
//     tiempo.remove();
//     suceso = new Suceso(game, tipo);
//     tipo = 1;
//     suceso.onClose = function () {
//       tiempo.add(10000);
//     };
//   };
// };

export default InitJuego;
