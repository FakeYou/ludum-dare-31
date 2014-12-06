'use strict';

var Bullet = function(game, x, y, rotation) {
  Phaser.Sprite.call(this, game, x, y, 'bullet', 1);

  rotation += (Math.random() - 0.5) / 4;

  this.game.physics.p2.enableBody(this);
  this.rotation = rotation;
  this.body.rotation = rotation;
  this.body.fixedRotation = true;
  this.body.setCollisionGroup(game.collisionGroups.bullets);
  this.body.collides(game.collisionGroups.world);

  this.body.onBeginContact.add(this.hit, this);

  this.animations.add('flash', 0, 10, false);
  this.animations.add('fly', [1,2,3], 10, true);

  this.animations.play('fly');
  // this.events.onAnimationComplete.add(function() {
  //   this.animations.play('fly');
  // }, this);
};

Bullet.prototype = Object.create(Phaser.Sprite.prototype);  
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function() {
  this.body.moveForward(-750);
};

Bullet.prototype.hit = function() {
  this.body.removeFromWorld();
  this.destroy();
};

module.exports = Bullet;