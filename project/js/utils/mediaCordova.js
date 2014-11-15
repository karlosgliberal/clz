var MediaCordova = function (sound) {
  if (!sound) {
    throw new this.exception('No src defined');
  }
  this.sound = sound;
  if (!game.device.desktop) {
    console.log(this.sound);
    //this.src = this.sound._sound.currentSrc;
    this.soundObj = new Media("assets/audio/blop.mp3",
      function () {
        console.log("playAudio():Audio Success");
      }, function (err) {
        console.log(err);
      }
    );
  } else {
    this.soundObj = this.sound;
  }
};

MediaCordova.prototype.play = function () {
  this.soundObj.play();
};


export default MediaCordova;
