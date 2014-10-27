
function Escenario(game, objeto, accion) {
  var style = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var styleDescripcion = { font: "46px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var group = Phaser.Group.call(this, game);
  var  sprite = this.create(0, 0, 'seccionGrande');
  sprite.anchor.setTo(0, 0);
  var cerrar = this.create(865, 45, 'cerrar');
  cerrar.anchor.setTo(0, 0);
  var imagen = this.create(105, 215, 'eledificio');
  imagen.scale.setTo(1, 2.5);
  imagen.anchor.setTo(0, 0);
  //var text = game.add.text(105, 120, "El edificio", style);
  //group.add(text);
  var textDescripcion = game.add.text(105, 120, "Teneis que sobrevivir por lo menos dos jugadores, durante 20 minutos, para que os rescaten (solo a dos)", styleDescripcion);
  group.add(textDescripcion);
  var tweenContendero = game.add.tween(this);
  tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
  tweenContendero.start();
}

Escenario.prototype = Object.create(Phaser.Group.prototype);
Escenario.prototype.constructor = Escenario;


export default Escenario;
