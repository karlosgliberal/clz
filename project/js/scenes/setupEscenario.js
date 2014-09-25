import Juego from 'global';

function SetupEscenario() {}
var textura;
var logo;
var espacioEscenarios = 0;
var contenedor;
var escenarios = Juego.escenarios;

SetupEscenario.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  var style = { font: "26px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  logo = this.add.button(this.game.world.centerX, game.world.centerY, 'button-start', this.startGame, this, 1, 2, 0);
  logo.anchor.setTo(0.5);

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

    }
  );
  console.log(contenedor);
};

SetupEscenario.prototype.startGame = function () {
  this.game.state.start('game', true, false);
};

export default SetupEscenario;
