import Juego from 'global';

var sucesosObj = Juego.sucesos;
var text, textDescripcion, group;

function Suceso(game, id) {
  this.tipo = id;
  if (id === 1) {
    id = game.rnd.integerInRange(1, Juego.sucesos.length);
  }
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

  text = game.add.text(-465, 120, sucesosObj[id].titulo, style);

  textDescripcion = game.add.text(-400, 220, sucesosObj[id].descripcion, styleDescripcion);
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
  this.onClose();
}

Suceso.prototype = Object.create(Phaser.Group.prototype);
Suceso.prototype.constructor = Suceso;


export default Suceso;
