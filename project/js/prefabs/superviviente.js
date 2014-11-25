import Juego from 'global';

var supervivientesObj = Juego.supervivientes[0];
var titulo, subtitulo, textDescripcion, cartas, group, imagen, burlar, dañar, curar, comunes, habilidad;
var juego = Juego.juego;


function Superviviente(game, objeto) {
  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var styleDescripcion = { font: "25px eurostileregular", fill: '#fff', fontSize: '25px', align: "center" };
  var styleSubtitulo = { font: "18px eurostileregular", fill: '#fff', fontSize: '15px', align: "center" };
  group = Phaser.Group.call(this, game);
  var cartasDatos = supervivientesObj[objeto].cartas[0];

  // var cerrar = this.create(0, 45, 'cerrar');
  // cerrar.inputEnabled = true;
  // cerrar.events.onInputDown.add(interroganteBotonSuperviviente, this);
  //cerrar.anchor.setTo(0, 0);

  imagen = game.add.image(5, 50, juego.superviviente);
  titulo = game.add.text(260, 50, supervivientesObj[objeto].titulo, style);
  subtitulo = game.add.text(titulo.x + 110, titulo.y + 22, supervivientesObj[objeto].subtitulo, styleSubtitulo);
  cartas = game.add.image(imagen.x + 350, imagen.y + 180, 'cartas');
  burlar = game.add.text(cartas.x + 17, cartas.y + 13, cartasDatos.burlar, styleSubtitulo);
  dañar = game.add.text(cartas.x + 70, cartas.y + 86, cartasDatos.dañar, styleSubtitulo);
  curar = game.add.text(cartas.x + 64, cartas.y + 180, cartasDatos.curar, styleSubtitulo);
  comunes = game.add.text(cartas.x + 10, cartas.y + 250, cartasDatos.comunes, styleSubtitulo);
  habilidad = game.add.text(cartas.x + 260, cartas.y + 30, supervivientesObj[objeto].habilidad, styleDescripcion);



  textDescripcion = game.add.text(-400, 220, supervivientesObj[objeto].descripcion, styleDescripcion);
  textDescripcion.wordWrap = true;
  textDescripcion.align = 'left';
  textDescripcion.wordWrapWidth =  340;

  // imagen.scale.setTo(1, 1.5);
  imagen.anchor.setTo(0, 0);

  // tweenEscenario(this, 465, 300);
  // tweenEscenario(cerrar, 400, 100);
  // tweenEscenario(imagen, 50, 200);
  // tweenEscenario(text, 105, 300);
  // tweenEscenario(textDescripcion, 100, 300);
  // tweenEscenario(cerrar, 865);
}

// function tweenEscenario(obj, coord, vel) {
//   var tweenContendero = game.add.tween(obj);
//   tweenContendero.to({x : coord }, vel, Phaser.Easing.Linear.None);
//   tweenContendero.start();
// }

// function interroganteBotonSuperviviente() {
//   this.destroy();
//   textDescripcion.destroy();
//   text.destroy();
// }

Superviviente.prototype = Object.create(Phaser.Group.prototype);
Superviviente.prototype.constructor = Superviviente;


export default Superviviente;
