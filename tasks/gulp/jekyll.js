var gulp = require('gulp'),
    cp = require('child_process'),
    browserSync = require('browser-sync');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
  return cp.spawn('jekyll', ['build', '--incremental'], {
    stdio: 'inherit'
  }).on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});
