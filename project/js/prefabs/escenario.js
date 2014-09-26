function Escenario(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'logo');
    this.anchor.setTo(0.5);
}

Escenario.prototype = Object.create(Phaser.Sprite.prototype);
Escenario.prototype.constructor = Escenario;

Escenario.prototype.update = function() {};

export default Escenario;
