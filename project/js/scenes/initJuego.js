import Juego from 'global';

function InitJuego() {}

InitJuego.prototype.create = function() {

  var siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
  siguiente.angle = 45;
  console.log('hola');

};

InitJuego.prototype.startGame = function () {
  this.game.state.start('Otro', true, false);
};

export default InitJuego;
