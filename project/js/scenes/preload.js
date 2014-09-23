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
  this.load.spritesheet('button-start', 'assets/botones.png', 212, 52);
  this.load.spritesheet('numeros', 'assets/number-buttons.png', 160, 160);
};

Preload.prototype.create = function () {
};

Preload.prototype.onLoadComplete = function () {
  this.game.state.start('menu', true, false);
};

export default Preload;
