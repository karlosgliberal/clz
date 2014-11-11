import Juego from 'global';
import Suceso from 'prefabs/suceso';

function InitJuego() {}
var suceso;

InitJuego.prototype.create = function () {
  var siguiente = this.add.button(this.game.world.centerX, game.world.centerY, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
  console.log(Juego.sucesos[5]);
};

InitJuego.prototype.startGame = function () {
  var aleatorio = game.rnd.integerInRange(0, 1);

  if (aleatorio === 0) {
    suceso = new Suceso(game, 1);
  } else {
    suceso = new Suceso(game, 0);
  }
};

export default InitJuego;
