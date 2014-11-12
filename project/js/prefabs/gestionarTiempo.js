var times;
var count = 0;

function GestionarTiempo(game) {

  this.movida = 'movida';
  Phaser.Time.call(this, game);
  // timerEvents = game.time.events.loop(game.rnd.integerInRange(250, 1000), updateCounter, this, i);
}

GestionarTiempo.prototype = Object.create(Phaser.Time.prototype);
GestionarTiempo.prototype.constructor = GestionarTiempo;

GestionarTiempo.prototype.add = function (time) {
  times  = game.time.events.loop(game.rnd.integerInRange(500, time), this.terminado, this, 1);
};

GestionarTiempo.prototype.remove = function () {
  game.time.events.remove(times);
};

GestionarTiempo.prototype.terminado = function () {
  console.log('movida' + count);
  count++;
  this.onTerminated();
};

export default GestionarTiempo;
