import Juego from 'global';
import Superviviente from 'prefabs/superviviente';

function setupSuperviviente() {}
var textura,
    espacioSupervivientes = 0,
    contenedor,
    botonDerecha,
    botonIzquierda,
    tweenContendero,
    interrogante,
    supervivientesObj = Juego.supervivientes[0],
    supervivientes = [],
    superviviente,
    siguiente;

setupSuperviviente.prototype.create = function () {
  textura = this.add.sprite(0, 0, 'textura');
  var style = { font: "26px eurostileregular", fill: '#fff', fontSize: '50px', align: "center" };
  var that = this;
  contenedor = game.add.sprite(100, 0, null);
  var supervivientesKey = Object.keys(supervivientesObj);

  for (var i = supervivientesKey.length - 1; i >= 0; i--) {
    supervivientes.push(supervivientesKey[i]);
  }
  supervivientes.forEach(function (item, index) {
      if (index !== 0) {
        espacioSupervivientes = espacioSupervivientes + 450;
      }
      contenedor.seccion = game.add.sprite((game.world.centerX - espacioSupervivientes) + 150, game.world.centerY, 'seccionMini');
      contenedor.seccion.anchor.setTo(0.5);
      contenedor.addChild(contenedor.seccion);

      contenedor.superviviente = game.add.sprite((game.world.centerX - espacioSupervivientes) + 150, game.world.centerY - 60, supervivientesObj[item].id);
      contenedor.superviviente.scale.setTo(-0.9, -0.9);
      contenedor.superviviente.anchor.setTo(0.5);
      contenedor.addChild(contenedor.superviviente);

      var tituloSuperviviente = supervivientesObj[item].titulo;
      contenedor.texto = game.add.text((game.world.centerX - espacioSupervivientes) + 10, game.world.centerY + 70, tituloSuperviviente, style);
      contenedor.addChild(contenedor.texto);

      contenedor.interrogante = game.add.sprite((game.world.centerX - espacioSupervivientes) + 270, game.world.centerY + 150, 'interrogante');
      contenedor.interrogante.superviviente =  supervivientesObj[item].id;
      contenedor.interrogante.inputEnabled = true;
      contenedor.interrogante.events.onInputDown.add(that.interroganteBoton, this);
      contenedor.interrogante.anchor.setTo(0.5);
      contenedor.addChild(contenedor.interrogante);

      contenedor.seleccion = game.add.sprite((game.world.centerX - espacioSupervivientes) + 50, game.world.centerY + 150, 'interrogante');
      contenedor.seleccion.superviviente = supervivientesObj[item].id;
      contenedor.seleccion.inputEnabled = true;
      contenedor.seleccion.events.onInputDown.add(that.seleccionBoton, this);
      contenedor.seleccion.anchor.setTo(0.5);
      contenedor.addChild(contenedor.seleccion);
    }
  );


  botonDerecha = this.add.button(50, game.world.centerY, 'flechaDerecha', this.itemDeDerecha, this);
  botonDerecha.anchor.setTo(0.5);

  siguiente = this.add.button(this.game.world.centerX + 310, game.world.centerY + 220, 'siguiente', this.startGame, this);
  siguiente.anchor.setTo(0.5);
};

setupSuperviviente.prototype.interroganteBoton = function (conteexto) {
  superviviente = new Superviviente(game, conteexto.superviviente);
};

setupSuperviviente.prototype.seleccionBoton = function (conteexto) {
  contenedor.children.forEach(function (losOtrosItems) {
    losOtrosItems.alpha = 1;
  });
  conteexto.alpha = 0.5;
  Juego.juego.superviviente = conteexto.superviviente;
};

setupSuperviviente.prototype.itemDeDerecha = function () {
  tweenContendero = game.add.tween(contenedor);
  tweenContendero.to({x: 590}, 1000, Phaser.Easing.Linear.None);
  tweenContendero.start();
};

setupSuperviviente.prototype.startGame = function () {
  this.game.state.start('game', true, false);
};


export default setupSuperviviente;
