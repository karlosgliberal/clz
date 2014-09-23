import Juego from 'global';

function SetupNumeros() {}

var logo;
var grupoNumeros;

SetupNumeros.prototype.create = function () {
  var text = "Elije el numero de jugadores";
  var style = { font: "45px Arial", fill: "#ff0044", align: "center" };
  game.add.text(game.world.centerX - 300, 10, text, style);
  // var numero = game.add.sprite(300, 200, 'numeros');
  // numero.animations.add('walk');
  // numero.animations.play('walk', 20, true);
  grupoNumeros = game.add.group();
  var item;

  for (var i = 0; i < 6; i++) {
    item = grupoNumeros.create(150 + 168 * i, game.world.centerX, 'numeros', i);
      // Enable input.
    item.inputEnabled = true;
    item.input.start(0, true);
    item.events.onInputDown.add(this.select);
      // item.events.onInputUp.add(release);
      // item.events.onInputOut.add(moveOff);
    grupoNumeros.getAt(i).alpha = 0.5;
  }
  grupoNumeros.scale.set(0.7, 0.7);

  logo = this.add.button(this.game.world.centerX, game.world.centerY + 250, 'button-start', this.startGame, this, 1, 2, 0);
  logo.anchor.setTo(0.5);

};

SetupNumeros.prototype.select = function (item) {
  grupoNumeros.forEach(function (losOtrosItems) {
    losOtrosItems.alpha = 0.5;
  });
  item.alpha = 1;
  console.log(Juego); // if (item.alpha === 1) {
};

SetupNumeros.prototype.startGame = function () {
  this.game.state.start('setupEscenario', true, false);
};


export default SetupNumeros;
