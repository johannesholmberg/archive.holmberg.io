var gulp = require('gulp'),
    cp = require('child_process'),
    browserSync = require('browser-sync');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Initial Jekyll build
 */
gulp.task('jekyll-build', function(done) {
  return cp.spawn('jekyll', ['build'], {
    stdio: 'inherit'
  }).on('close', done);
});

/**
 * Build the Jekyll Site with only incremental changes, good for development
 */
gulp.task('jekyll-incremental', function(done) {
  return cp.spawn('jekyll', ['build', '--incremental'], {
    stdio: 'inherit'
  }).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-incremental'], function() {
  browserSync.reload();
});
