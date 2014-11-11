import Juego from 'global';

var supervivientesObj = Juego.supervivientes[0];
var text, textDescripcion, group;

function Superviviente(game, objeto) {
  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var styleDescripcion = { font: "30px eurostileregular", fill: '#fff', fontSize: '25px', align: "center" };
  group = Phaser.Group.call(this, game);

  var  sprite = this.create(-465, 0, 'seccionGrande');
  sprite.anchor.setTo(0, 0);

  var cerrar = this.create(0, 45, 'cerrar');
  cerrar.inputEnabled = true;
  cerrar.events.onInputDown.add(interroganteBotonSuperviviente, this);
  //cerrar.anchor.setTo(0, 0);

  var imagen = this.create(0, 215, 'eledificio');
  imagen.scale.setTo(1, 1.5);
  imagen.anchor.setTo(0, 0);

  text = game.add.text(-465, 120, supervivientesObj[objeto].titulo, style);

  textDescripcion = game.add.text(-400, 220, supervivientesObj[objeto].descripcion, styleDescripcion);
  textDescripcion.wordWrap = true;
  textDescripcion.align = 'left';
  textDescripcion.wordWrapWidth =  340;

  tweenEscenario(this, 465, 300);
  tweenEscenario(cerrar, 400, 100);
  tweenEscenario(imagen, 50, 100);
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
}

Superviviente.prototype = Object.create(Phaser.Group.prototype);
Superviviente.prototype.constructor = Superviviente;


export default Superviviente;
