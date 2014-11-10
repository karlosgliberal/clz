import Juego from 'global';

function SetupNumeros() {}

var siguiente;
var grupoNumeros;
var textura;
var jugadores;

SetupNumeros.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  jugadores =  this.game.add.image(this.game.world.centerX, 100, 'numeroJugadores');
  jugadores.anchor.setTo(0.5, 0.5);
  grupoNumeros = game.add.group();

  var item;
  for (var i = 0; i < 4; i++) {
    item = grupoNumeros.create(200 + 168 * i, game.world.centerX - 200, 'numeros', i);
    item.inputEnabled = true;
    item.input.start(0, true);
    item.events.onInputDown.add(this.select, {valor: i});
    grupoNumeros.getAt(i).alpha = 0.9;
  }
  siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
};

SetupNumeros.prototype.select = function (item) {
  grupoNumeros.forEach(function (losOtrosItems) {
    losOtrosItems.alpha = 0.5;
  });
  item.alpha = 1;
  Juego.juego.numeroJugadores = this.valor;
};

SetupNumeros.prototype.startGame = function () {
  this.game.state.start('numeroJugador', true, false);
};


export default SetupNumeros;
