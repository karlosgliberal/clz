var MediaCordova = function (sound) {
  if (!sound) {
    throw new this.exception('No src defined');
  }
  this.sound = sound;
  if (!game.device.desktop) {
    if (game.device.iOS) {
      this.src = 'assets/audio/' + sound.key + '.mp3';
    } else if (game.device.android) {
      this.src = '/android_asset/www/assets/audio/' + sound.key + '.mp3';
      console.log(this.src);
    } else {
      this.src = this.sound._sound.currentSrc;
    }
    this.soundObj = new Media(this.src,
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
