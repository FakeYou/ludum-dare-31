'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

gulp.task('clean', function() {
  gulp.src('./dist/**/*.*', { read: false })
    .pipe(clean());
});

gulp.task('copyAssets', function() {
  gulp.src('./lib/assets/**/*.*', { base: './lib' })
    .pipe(gulp.dest('dist'));
});

gulp.task('copyLibs', function() {
  gulp.src('./node_modules/phaser/dist/phaser.min.js', { base: './node_modules/phaser/dist'})
    .pipe(rename('phaser.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', function() {
  gulp.src('./index.html', { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('bundle', function() {
  gulp.src('./index.js', { read: false })
    .pipe(browserify().on('error', gutil.log))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./lib/**/*.*', ['build']);
});

gulp.task('webserver', function() {
  connect.server({
    root: ['./dist']
  });
});

gulp.task('build', ['clean', 'bundle', 'copyHtml', 'copyAssets', 'copyLibs']);

gulp.task('default', ['build', 'watch', 'webserver']);