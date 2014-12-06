'use strict';

var _ = require('underscore');

var World = function(game, level) {
  this.game = game;
  this.level = level;
};

World.prototype.create = function() {
  var self = this;

  this.map = this.game.add.tilemap(this.level);
  this.map.addTilesetImage('tileset');

  this.ground = this.map.createLayer('ground');
  this.ground.resizeWorld();

  this.map.setCollision(3, true, this.ground);
  this.game.physics.p2.convertTilemap(this.map, this.ground);

  _.each(this.ground.layer.bodies, function(body) {
    body.setCollisionGroup(self.game.collisionGroups.world);
    body.collides(self.game.collisionGroups.guns);
    body.collides(self.game.collisionGroups.bullets);
  });
};

World.prototype.update = function() {

};

module.exports = World;