function Menu() {}

var empezar;
var image;
var textura;
var blop;
Menu.prototype.create = function () {
  blop = this.game.add.audio('blop');
  textura = this.add.sprite(0, 0, 'textura');
  image =  this.game.add.image(this.game.world.centerX, 200, 'logo');
  image.anchor.setTo(0.5, 0.5);
  empezar = this.add.button(this.game.world.centerX, game.world.centerY + 150, 'button-start', this.startGame, this, 1, 2, 0);
  empezar.anchor.setTo(0.5);
};

Menu.prototype.startGame = function () {
  //blop.play();
  console.log(blop);
  var myMedia = new Media('/android_asset/www/assets/audio/blop.mp3',
    function () {
      console.log("playAudio():Audio Success");
    }, function (err) {
      console.log(err);
    });
  myMedia.play();
  this.game.state.start('setupNumeros', true, false);
};



export default Menu;
