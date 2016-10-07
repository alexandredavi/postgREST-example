'use strict';

var path = require('path');
var gulp = require('gulp');
var globals = require('.././globals');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var util = require('util');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === globals.paths.src || (util.isArray(baseDir) && baseDir.indexOf(globals.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(globals.paths.tmp, '/serve'), globals.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(globals.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([globals.paths.tmp + '/serve', globals.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(globals.paths.dist, []);
});
