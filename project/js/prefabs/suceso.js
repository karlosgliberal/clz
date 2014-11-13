import Juego from 'global';

var text, textDescripcion, group;

function Suceso(game, individalColectivo, roboCarta) {
  var cartaObjeto = this.obtenerCarta(individalColectivo, roboCarta);

  // if (roboCarta === 0) {
  //   id = game.rnd.integerInRange(1, Juego.sucesos.length);
  // }
  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var styleDescripcion = { font: "30px eurostileregular", fill: '#fff', fontSize: '25px', align: "center" };
  group = Phaser.Group.call(this, game);


  var  sprite = this.create(-465, 0, 'seccionGrande');
  sprite.anchor.setTo(0, 0);

  var cerrar = this.create(0, 45, 'cerrar');
  cerrar.inputEnabled = true;
  cerrar.events.onInputDown.add(interroganteBotonSuperviviente, this);


  text = game.add.text(-465, 120, cartaObjeto.titulo + ': ' + cartaObjeto.tipo, style);

  textDescripcion = game.add.text(-400, 220, cartaObjeto.descripcion, styleDescripcion);
  textDescripcion.wordWrap = true;
  textDescripcion.align = 'left';
  textDescripcion.wordWrapWidth =  600;

  tweenEscenario(this, 465, 300);
  tweenEscenario(cerrar, 400, 100);
  // tweenEscenario(imagen, 50, 100);
  tweenEscenario(text, 105, 300);
  tweenEscenario(textDescripcion, 100, 300);
  // tweenEscenario(cerrar, 865);
}

function tweenEscenario(obj, coord, vel) {
  var tweenContendero = game.add.tween(obj);
  tweenContendero.to({x : coord }, vel, Phaser.Easing.Linear.None);
  tweenContendero.start();
}

function interroganteBotonSuperviviente() {
  this.destroy();
  textDescripcion.destroy();
  text.destroy();
  this.onClose();
}


Suceso.prototype = Object.create(Phaser.Group.prototype);
Suceso.prototype.constructor = Suceso;

Suceso.prototype.obtenerCarta = function (individualColectivo, roboCarta) {
  var cartas = [];
  if (roboCarta === 0) {
    return Juego.sucesos[0];
  }
  for (var i = Juego.sucesos.length - 1; i >= 0; i--) {
    if (Juego.sucesos[i].tipo === individualColectivo) {
      cartas.push(Juego.sucesos[i]);
    }
  }
  var id = game.rnd.integerInRange(1, cartas.length);
  return cartas[id];
};


export default Suceso;
