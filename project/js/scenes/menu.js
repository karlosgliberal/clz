function Menu() {}

var logo;
var text;
var style;
var t;
var textura;

Menu.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  text = "Configurar partida";
  style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  t = game.add.text(game.world.centerX - 300, 0, text, style);
  logo = this.add.button(this.game.world.centerX, game.world.centerY, 'button-start', this.startGame, this, 1, 2, 0);
  logo.anchor.setTo(0.5);

  this.game.input.onDown.add(this.startGame, this);
};

Menu.prototype.startGame = function () {
  this.game.state.start('game', true, false);
};

export default Menu;
