var times;
var count = 0;
var lvl1Timer;

function ColaTiempo(game) {

  this.movida = 'movida';
  Phaser.Time.call(this, game);
  // timerEvents = game.time.events.loop(game.rnd.integerInRange(250, 1000), updateCounter, this, i);
}

ColaTiempo.prototype = Object.create(Phaser.Time.prototype);
ColaTiempo.prototype.constructor = ColaTiempo;

ColaTiempo.prototype.add = function (time) {
  // times  = game.time.events.loop(game.rnd.integerInRange(500, time), updateCounter, this, 1);

  console.log(this);
  lvl1Timer = this.game.time.create(false);

  // lvl1Timer.start();
  // lvl1Timer.onComplete.add(this.incrementCounter, this);
  // lvl1Timer.repeat(Phaser.Timer.SECOND * 4, 10, this.objectDroppingFunction, this);

};

ColaTiempo.prototype.remove = function (time) {
  game.time.events.remove(times);
};


function updateCounter() {

  console.log('movida' + count );
  count++;
}

export default ColaTiempo;
