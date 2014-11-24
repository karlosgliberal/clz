import Suceso from 'prefabs/suceso';
var times;

function GestionarTiempo(game) {
  this.individualColectivo = 0;
  this.roboCarta = 1;
  Phaser.Time.call(this, game);
}

GestionarTiempo.prototype = Object.create(Phaser.Time.prototype);
GestionarTiempo.prototype.constructor = GestionarTiempo;

GestionarTiempo.prototype.add = function (time) {
  var aleatorio = game.rnd.integerInRange(500, time);
  times  = game.time.events.loop(aleatorio, terminado, this, 1);
};

GestionarTiempo.prototype.sucesoIndiviudal = function () {
  times  = game.time.events.loop(0, terminado, this, 1);
};

GestionarTiempo.prototype.remove = function () {
  game.time.events.remove(times);
};

GestionarTiempo.prototype.tenerSuerte = function () {
  this.roboCarta = game.rnd.integerInRange(0, 1);
  if (this.roboCarta === 0) {
    this.individualColectivo = 1;
    this.roboCarta = 0;
  } else {
    this.individualColectivo = 1;
    this.roboCarta = 1;
  }
  this.sucesoIndiviudal(0);
};

function terminado() {
  this.remove();
  var that = this;
  console.log('terminado: ', this.individualColectivo, this.roboCarta);
  var suceso = new Suceso(game, this.individualColectivo, this.roboCarta);
  suceso.onClose = function () {
    that.add(240000);
    that.individualColectivo = 0;
    that.roboCarta = 1;
  };
}


export default GestionarTiempo;
