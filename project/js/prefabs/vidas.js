var group, fondoVidas, vidaMas, vidaMenos, vidaNumeros;

function Vidas(game) {
  group = Phaser.Group.call(this, game);
  vidaMas = game.add.button(game.world.centerX + 430, 126, 'vidaMas', addVida, this);
  vidaMas.anchor.setTo(0.5);

  vidaMenos = game.add.button(game.world.centerX + 185, 126, 'vidaMenos', rmVida, this);
  vidaMenos.anchor.setTo(0.5);
  fondoVidas = this.create(game.world.centerX + 150, 55, 'fondoVidas');
  fondoVidas.anchor.setTo(0, 0);

  vidaNumeros = game.add.sprite(game.world.centerX + 315, 130, 'vidaNumeros');
  vidaNumeros.anchor.setTo(0.5);
  vidaNumeros.frame = 1;
  vidaNumeros.numeroFrames = vidaNumeros.animations._frameData._frames.length;
}

function addVida() {
  vidaNumeros.frame =  vidaNumeros.frame - 1;
  vidaMenos.alpha = 1;
  if (vidaNumeros.frame === 0) {
    vidaMas.alpha = 0.1;
    vidaNumeros.frame = 0;
  }
}

function rmVida() {
  vidaNumeros.frame =  vidaNumeros.frame + 1;
  vidaMas.alpha = 1;
  if (vidaNumeros.frame === 2) {
    vidaMenos.alpha = 0.1;
    vidaNumeros.frame = 2;
  }
}

Vidas.prototype = Object.create(Phaser.Group.prototype);
Vidas.prototype.constructor = Vidas;

export default Vidas;
