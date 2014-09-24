function Menu() {}

var empezar;
var image;
var textura;

Menu.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  image =  this.game.add.image(this.game.world.centerX, 200, 'logo');
  image.anchor.setTo(0.5, 0.5);
  empezar = this.add.button(this.game.world.centerX, game.world.centerY + 150, 'button-start', this.startGame, this, 1, 2, 0);
  empezar.anchor.setTo(0.5);
};

Menu.prototype.startGame = function () {
  this.game.state.start('setupNumeros', true, false);
  //this.game.state.start('game', true, false);
};

export default Menu;
