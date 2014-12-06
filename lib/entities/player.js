'use strict';

var Player = function(game, x, y) {
  Phaser.Group.call(this, game);
  // this.anchor.setTo(0.5, 0.5);

  this.x = x;
  this.y = y;


  this.head = new Phaser.Sprite(game, 0, 0, 'player', 0);
  this.body = new Phaser.Sprite(game, 0, 11, 'player', 1);
  this.legs = new Phaser.Sprite(game, 0, 19, 'player', 2);

  this.jetpack = new Phaser.Sprite(game, 0, 17, 'player', 10);
  this.exhaust = new Phaser.Sprite(game, 0, 20, 'player', 16);
  this.gun = new Phaser.Sprite(game, 0, 13, 'player', 8);

  this.head.anchor.set(0.5);
  this.body.anchor.set(0.5);
  this.legs.anchor.set(0.5);
  this.jetpack.anchor.set(0.5);
  this.exhaust.anchor.set(0.5);
  this.gun.anchor.set(0.5);

  this.exhaust.animations.add('exhaust', [16, 17, 18, 19, 20, 21], 10, true);
  this.exhaust.animations.play('exhaust');

  this.addMultiple([
    this.jetpack,
    this.exhaust,
    this.legs,
    this.body,
    this.head,
    this.gun,
  ]);
};

Player.prototype = Object.create(Phaser.Group.prototype);  
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  var dx = this.game.input.x - this.x;
  var dy = this.game.input.y - this.y;
        
  this.gun.rotation = Math.atan2(dy, dx);
};

module.exports = Player;