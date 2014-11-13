import Suceso from 'prefabs/suceso';
var times;

function GestionarTiempo(game) {
  this.tipo = 1;
  Phaser.Time.call(this, game);
}

GestionarTiempo.prototype = Object.create(Phaser.Time.prototype);
GestionarTiempo.prototype.constructor = GestionarTiempo;

GestionarTiempo.prototype.add = function (time) {
  times  = game.time.events.loop(game.rnd.integerInRange(500, time), terminado, this, 1);
};

GestionarTiempo.prototype.remove = function () {
  game.time.events.remove(times);
};

GestionarTiempo.prototype.tenerSuerte = function () {
  this.tipo = game.rnd.integerInRange(0, 1);
  this.add(0);
  //times  = game.time.events.loop(game.rnd.integerInRange(500, time), terminado, this, 1);
};

function terminado() {
  console.log(this.tipo);
  this.remove();
  var that = this;
  var suceso = new Suceso(game, this.tipo);
  this.tipo = 1;
  suceso.onClose = function () {
    that.add(10000);
  };
}


export default GestionarTiempo;
