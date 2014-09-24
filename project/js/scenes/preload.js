function Preload() {
  this.loadingSprite = null;
}

Preload.prototype.preload = function () {
  this.loadingSprite = this.add.sprite(320, 480, 'preloader');
  this.loadingSprite.anchor.setTo(0.5, 0.5);

  this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  this.load.setPreloadSprite(this.loadingSprite);

  // Load game assets here
  this.load.image('logo', 'assets/logo.png');
  this.load.image('textura', 'assets/textura.png');
  this.load.image('titulo', 'assets/title.png');
  this.load.image('eledificio', 'assets/eledificio.png');
  this.load.image('interrogante', 'assets/interrante.png');
  this.load.image('siguiente', 'assets/siguiente.png');
  this.load.image('numeroJugadores', 'assets/numero-jugadores.png');
  this.load.spritesheet('button-start', 'assets/botones.png', 371, 100);
  this.load.spritesheet('numeros', 'assets/botones_numero.png', 94, 92);
};

Preload.prototype.create = function () {
};

Preload.prototype.onLoadComplete = function () {
  this.game.state.start('menu', true, false);
};

export default Preload;
