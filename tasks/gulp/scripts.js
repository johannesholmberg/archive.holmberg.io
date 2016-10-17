var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify');

/**
 * Concatenate javascripts
 */
gulp.task('scripts', function() {
  return gulp.src([
    'source/assets/vendor/picturefill/dist/picturefill.js',
    'source/assets/js/source/*.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('source/assets/js'))
  .pipe(gulp.dest('_site/assets/js'))

  .pipe(rename({
    basename: 'app',
    suffix: '.min'
  }))
  .pipe(uglify())
  .pipe(gulp.dest('source/assets/js'))
  .pipe(gulp.dest('_site/assets/js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
