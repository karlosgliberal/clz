function Preload() {
  this.loadingSprite = null;
}

Preload.prototype.preload = function () {
  this.loadingSprite = this.add.sprite(320, 480, 'preloader');
  this.loadingSprite.anchor.setTo(0.5, 0.5);

  this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  this.load.setPreloadSprite(this.loadingSprite);

  // Load game assets here
  this.load.image('logo', 'assets/logo.png');
  this.load.image('textura', 'assets/textura.png');
  this.load.image('titulo', 'assets/title.png');
  this.load.image('eledificio', 'assets/eledificio.png');
  this.load.image('supermercado', 'assets/eledificio.png');
  this.load.image('estadio', 'assets/eledificio.png');
  this.load.image('interrogante', 'assets/interrogante.png');
  this.load.image('siguiente', 'assets/siguiente.png');
  this.load.image('flechaDerecha', 'assets/flecha_derecha.png');
  this.load.image('flechaIzquierda', 'assets/flecha_izquierda.png');
  this.load.image('numeroJugadores', 'assets/numero-jugadores.png');
  this.load.image('seccionMini', 'assets/seccionMini.png');
  this.load.image('cerrar', 'assets/cerrar.png');
  this.load.image('seccionGrande', 'assets/seccionGrande.png');
  this.load.image('individual', 'assets/individual.png');
  this.load.image('empezar', 'assets/empezar.png');

  //Juego Ui
  this.load.image('fondoJuego', 'assets/juegoUi/fondo-superviviente.png');

  //Vida Ui
  this.load.image('fondoVidas', 'assets/juegoUi/fondo-vidas.png');
  this.load.image('vidaMenos', 'assets/juegoUi/vidas-menos.png');
  this.load.image('vidaMas', 'assets/juegoUi/vidas-mas.png');
  this.load.spritesheet('vidaNumeros', 'assets/juegoUi/vidas-numeros.png', 107, 90, 3);



  this.load.audio('blop', 'assets/audio/blop.mp3');
  this.load.audio('sos', 'assets/audio/sos.mp3');

  this.load.spritesheet('button-start', 'assets/botones.png', 371, 100);
  this.load.spritesheet('numeros', 'assets/botones_numero.png', 94, 92);
};

Preload.prototype.create = function () {
};

Preload.prototype.onLoadComplete = function () {
  this.game.state.start('initJuego', true, false);
  // this.game.state.start('menu', true, false);
};

export default Preload;
