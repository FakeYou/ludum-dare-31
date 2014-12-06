'use strict';

window._ = require('underscore');

var Game = {
  Boot: require('./lib/states/boot'),
  Preload: require('./lib/states/preload'),
  Play: require('./lib/states/play')
};

window.addEventListener('load', function() {
  var game = new Phaser.Game(720, 600, Phaser.AUTO, 'container');
  window.game = game;

  game.state.add('boot', Game.Boot);
  game.state.add('preload', Game.Preload);
  game.state.add('play', Game.Play);

  game.state.start('boot');
});