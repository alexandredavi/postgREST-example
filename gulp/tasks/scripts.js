'use strict';

var path = require('path');
var gulp = require('gulp');
var globals = require('.././globals');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

function buildScripts() {
  return gulp.src(path.join(globals.paths.src, '/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size());
}
