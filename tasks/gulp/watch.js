var gulp = require('gulp');

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch('source/assets/css/**/*.scss', ['sass']);
  gulp.watch('source/assets/js/source/**/*.js', ['scripts']);
  gulp.watch('source/assets/icons/*.svg', ['svg']);
  gulp.watch(['source/**/*.html','source/**/*.md'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['watch', 'browser-sync']);
