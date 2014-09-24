function Boot() {}

Boot.prototype.preload = function () {
  this.load.image('preloader', 'assets/preloader.gif');
};

Boot.prototype.create = function () {
  // max number of fingers to detect
  this.input.maxPointers = 1;
  // auto pause if window looses focus
  this.stage.disableVisibilityChange = true;

  if (this.game.device.desktop) {
    this.stage.scale.pageAlignHorizontally = true;
  }
  this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
  this.game.scale.setScreenSize(true);
  this.game.scale.pageAlignHorizontally = true;
  this.game.scale.pageAlignVertically = true;
  this.game.scale.stopFullScreen();

  this.game.canvas.id = 'colapso';



  this.game.state.start('preload', true, false);
};

export default Boot;
