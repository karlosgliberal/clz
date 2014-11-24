import MediaCordova from 'utils/mediaCordova';

var group, fondoVidas, vidaMas, vidaMenos, vidaNumeros, bellAudioAssets, bellAudio, malAudioAssets, malAudio;

function Vidas(game) {
  bellAudioAssets = game.add.audio('bell');
  bellAudio = new MediaCordova(bellAudioAssets);

  malAudioAssets = game.add.audio('mal');
  malAudio = new MediaCordova(malAudioAssets);

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
  console.log('boton');
  vidaNumeros.frame =  vidaNumeros.frame - 1;
  vidaMenos.alpha = 1;
  vidaMenos.input.enabled = true;
  if (vidaNumeros.frame === 0) {
    vidaMas.alpha = 0.1;
    vidaMas.input.enabled = false;
    vidaNumeros.frame = 0;
  }
  bellAudio.play();
}

function rmVida() {
  vidaNumeros.frame =  vidaNumeros.frame + 1;
  vidaMas.alpha = 1;
  vidaMas.input.enabled = true;
  if (vidaNumeros.frame === 2) {
    vidaMenos.alpha = 0.1;
    vidaMenos.input.enabled = false;
    vidaNumeros.frame = 2;
  }
  malAudio.play();
}

Vidas.prototype = Object.create(Phaser.Group.prototype);
Vidas.prototype.constructor = Vidas;

export default Vidas;
