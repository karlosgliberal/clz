import Juego from 'global';

function numeroJugador() {}

var siguiente;
var grupoJugador;
var textura;
var jugadores;
var text;

numeroJugador.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  var style = { font: "52px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  text = game.add.text(170, 130, "¿Qué número de jugador eres?", style);
  // jugadores =  this.game.add.image(this.game.world.centerX, 100, 'numeroJugadores');
  // jugadores.anchor.setTo(0.5, 0.5);
  grupoJugador = game.add.group();

  var item;
  for (var i = 0; i < 4; i++) {
    item = grupoJugador.create(200 + 168 * i, game.world.centerX - 200, 'numeros', i);
    item.inputEnabled = true;
    item.input.start(0, true);
    item.events.onInputDown.add(this.select, {valor: i});
    grupoJugador.getAt(i).alpha = 0.9;
  }
  siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
};

numeroJugador.prototype.select = function (item) {
  grupoJugador.forEach(function (losOtrosItems) {
    losOtrosItems.alpha = 0.5;
  });
  item.alpha = 1;
  Juego.juego.jugadorNumero = this.valor;
};

numeroJugador.prototype.startGame = function () {
  this.game.state.start('setupEscenario', true, false);
};


export default numeroJugador;
