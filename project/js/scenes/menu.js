import MediaCordova from 'utils/mediaCordova';

function Menu() {}

var empezar,
    image,
    textura,
    blopAudioAssets,
    blopAudio;

Menu.prototype.create = function () {
  blopAudioAssets = this.game.add.audio('blop');
  blopAudio = new MediaCordova(blopAudioAssets);
  textura = this.add.sprite(0, 0, 'textura');
  image =  this.game.add.image(this.game.world.centerX, 200, 'logo');
  image.anchor.setTo(0.5, 0.5);
  empezar = this.add.button(this.game.world.centerX, game.world.centerY + 150, 'button-start', this.startGame, this, 1, 2, 0);
  empezar.anchor.setTo(0.5);
};

Menu.prototype.startGame = function () {
  blopAudio.play();
  this.game.state.start('initJuego', true, false);
  //this.game.state.start('setupNumeros', true, false);
};



export default Menu;
