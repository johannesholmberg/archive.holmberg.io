var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

/**
 * Compile files from _assets/css/source into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {

  var onError = function(err) {
    notify.onError({
      title:    "Gulp Sass",
      subtitle: "Sass error!",
      message:  'Error: <%= error.message %>'
    })(err);
    this.emit('end');
  };


  gulp.src('source/assets/css/source/cv.scss')
    .pipe(sass())
    .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('source/assets/css'));


  gulp.src('source/assets/css/source/config.imports.scss')
    .pipe(plumber({errorHandler: onError}))

    // Normal version
    .pipe(sass({
      style: 'expanded',
      includePaths: ['scss'],
      onError: function(err) {
        return notify().write(err);
      }
    }))

    .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))

    .pipe(rename({
      basename: 'styles'
    }))

    .pipe(gulp.dest('source/assets/css'))
    .pipe(gulp.dest('_site/assets/css'))

    // Reload
    .pipe(browserSync.reload({
      stream: true
    }))

    // Uglified version
    .pipe(rename({
      suffix: '.min'
    }))

    .pipe(cleanCSS())

    .pipe(gulp.dest('source/assets/css'))
    .pipe(gulp.dest('_site/assets/css'));
});
