import Juego from 'global';

function SetupEscenario() {}
var textura,
    espacioEscenarios = 0,
    contenedor,
    botonDerecha,
    botonIzquierda,
    tweenContendero,
    interrogante,
    escenarios = Juego.escenarios,
    siguiente;

SetupEscenario.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  var style = { font: "26px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var that = this;
  contenedor = game.add.sprite(100, 0, null);
  escenarios.forEach(function (item, index) {
      if (index !== 0) {
        espacioEscenarios = espacioEscenarios + 450;
      }
      var indice = 'indice' + index;
      console.log(indice);
      contenedor.escenario = game.add.sprite((game.world.centerX - espacioEscenarios) + 150, game.world.centerY, item.id);
      contenedor.escenario.anchor.setTo(0.5);
      contenedor.addChild(contenedor.escenario);

      var tituloEscenario = item.titulo;
      contenedor.texto = game.add.text((game.world.centerX - espacioEscenarios), game.world.centerY + 120, tituloEscenario, style);
      contenedor.addChild(contenedor.texto);

      contenedor.interrogante = game.add.sprite((game.world.centerX - espacioEscenarios) + 280, game.world.centerY + 120, 'interrogante');
      contenedor.interrogante.escenario = item.id;
      contenedor.interrogante.inputEnabled = true;
      contenedor.interrogante.events.onInputDown.add(that.interroganteBoton, this);
      //contenedor.interrogante = game.add.button((game.world.centerX - espacioEscenarios) + 280, game.world.centerY + 120, 'interrogante', that.interroganteBoton, this);
      contenedor.interrogante.anchor.setTo(0.5);
      contenedor.addChild(contenedor.interrogante);
    }
  );


  botonDerecha = this.add.button(50, game.world.centerY, 'flechaDerecha', this.itemDeDerecha, this);
  botonDerecha.anchor.setTo(0.5);

  siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
};

SetupEscenario.prototype.startGame = function () {
  this.game.state.start('game', true, false);
};

SetupEscenario.prototype.interroganteBoton = function (conteexto) {
  console.log(conteexto.escenario);
};

SetupEscenario.prototype.itemDeDerecha = function () {
  tweenContendero = game.add.tween(contenedor);
  tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
  tweenContendero.start();

  //this.game.state.start('game', true, false);
};

export default SetupEscenario;
