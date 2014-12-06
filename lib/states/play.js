'use strict';

// var _ = require('underscore');
var Player = require('../entities/player');
var World = require('../entities/world');
var Gun = require('../entities/gun');

var Play = function(game) {
  this.game = game;
};

Play.prototype.preload = function() {
  this.game.physics.startSystem(Phaser.Physics.P2JS);
  this.game.physics.p2.setImpactEvents(true);
  this.game.physics.p2.defaultRestitution = 0.8;

  this.game.collisionGroups = {
    'guns': this.game.physics.p2.createCollisionGroup(),
    'bullets': this.game.physics.p2.createCollisionGroup(),
    'world': this.game.physics.p2.createCollisionGroup(),
  };

  this.game.physics.p2.updateBoundsCollisionGroup();
};  

Play.prototype.create = function() {
  this.world = new World(this.game, 'dev');
  this.world.create();

  this.player = new Player(this.game, 100, 100);
  this.game.add.existing(this.player);

  // this.gun = new Gun(this.game, 150, 150);
  // this.game.add.existing(this.gun);
};

Play.prototype.update = function() {
  // this.world.update();

  // this.gun.update();
};

module.exports = Play;