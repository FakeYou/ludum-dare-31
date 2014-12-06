'use strict';

var Player = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'dude', frame);

  this.anchor.setTo(0.5, 0.5);

  this.game.physics.p2.enableBody(this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);  
Player.prototype.constructor = Player;

Player.prototype.update = function() {
};

module.exports = Player;