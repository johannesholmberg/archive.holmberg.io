var gulp = require('gulp'),
    browserSync = require('browser-sync');

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    port: 8080,
    server: {
      baseDir: '_site'
    }
  });
});
