function Vidas(game, x, y/*, your-params-here */) {
    Phaser.Sprite.call(this, game, x, y, 'logo');

    /* init code here */
    this.anchor.setTo(0.5);
}

Vidas.prototype = Object.create(Phaser.Sprite.prototype);
Vidas.prototype.constructor = Vidas;

Vidas.prototype.update = function() {};

export default Vidas;
