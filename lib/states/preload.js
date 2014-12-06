'use strict';

var Preload = function(game) {
  this.game = game;

  this.background = null;
  this.progressBar = null;

  this.ready = false;
};

Preload.prototype.preload = function() {
  this.background = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBackground');
  this.background.anchor.setTo(0.5, 0.5);
  this.background.scale.set(1, 1);

  this.progressBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadProgressBar');
  this.progressBar.anchor.setTo(0.5, 0.5);
  this.progressBar.scale.set(1, 1);
  this.progressBar.x = this.world.centerX;

  this.load.setPreloadSprite(this.progressBar);

  this.game.load.spritesheet('tileset', 'assets/tileset.png', 32, 32);
  this.game.load.spritesheet('dude', 'assets/dude.png', 32, 32);
  this.game.load.spritesheet('player', 'assets/player.png', 32, 32);
  this.game.load.spritesheet('bullet', 'assets/bullet.png', 16, 16);
  this.game.load.image('gun', 'assets/gun.png');
  this.game.load.image('muzzleFlash', 'assets/muzzleFlash.png');
  this.game.load.tilemap('dev', 'assets/levels/dev.json', null, Phaser.Tilemap.TILED_JSON);
};

Preload.prototype.create = function() {
  this.progressBar.cropEnabled = false;
};

Preload.prototype.update = function() {
  if(this.load.hasLoaded) {
    this.state.start('play');
  }
};

module.exports = Preload;