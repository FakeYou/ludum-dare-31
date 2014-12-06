'use strict';

var Bullet = require('./bullet');

var Gun = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'gun');

  this.anchor.setTo(0, -1);
  this.scale.set(0.5);

  this.game.physics.p2.enableBody(this, false);

  this.body.setCollisionGroup(game.collisionGroups.guns);
  this.body.collides(game.collisionGroups.world);

  this.cursors = game.input.keyboard.createCursorKeys();
  this.game.input.onDown.add(this.shoot, this);
  this.game.input.onUp.add(this.shoot, this);

  this.shooting = false;

  this.muzzleFlash = game.add.sprite(0, 120, 'muzzleFlash');
  this.muzzleFlash.anchor.setTo(1, 0.5);
  this.muzzleFlash.angle = 90;
  this.muzzleFlash.visible = false;
  this.addChild(this.muzzleFlash);
};

Gun.prototype = Object.create(Phaser.Sprite.prototype);  
Gun.prototype.constructor = Gun;

Gun.prototype.update = function() {
  this.faceMouse();

  if(this.shooting) {
    this.body.thrust(40);
  }
};

Gun.prototype.shoot = function() {
  this.muzzleFlash.visible = !this.muzzleFlash.visible;
  this.shooting = !this.shooting;

  if(this.shooting) {
    var bullet = new Bullet(this.game, this.body.x, this.body.y, this.body.rotation);
    this.game.add.existing(bullet);
  }
};

Gun.prototype.faceMouse = function() {
  var dx = this.game.input.x - this.x;
  var dy = this.game.input.y - this.y;
        
  this.body.rotation = Math.atan2(dy, dx) - Math.PI/2;
};

module.exports = Gun;