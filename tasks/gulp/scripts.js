var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify');

/**
 * Concatenate javascripts
 */
gulp.task('scripts', function() {

  var onError = function(err) {
    notify.onError({
      title:    "Gulp JS",
      subtitle: "JS error!",
      message:  'Error: <%= error.message %>'
    })(err);
    this.emit('end');
  };

  return gulp.src([
    'source/assets/vendor/picturefill/dist/picturefill.js',
    'source/assets/js/source/*.js'
  ])

  // Normal version
  .pipe(concat('app.js'))

  .pipe(babel())
  .on('error', onError)

  .pipe(gulp.dest('source/assets/js'))
  .pipe(gulp.dest('_site/assets/js'))

  // Uglified version
  .pipe(rename({
    suffix: '.min'
  }))
  //.pipe(uglify({ mangle: false }))

  .pipe(gulp.dest('source/assets/js'))
  .pipe(gulp.dest('_site/assets/js'))

  // Reload
  .pipe(browserSync.reload({
    stream: true
  }));
});
