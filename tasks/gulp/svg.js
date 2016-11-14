var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio');

gulp.task("svg", function () {
  return gulp
    .src("source/assets/icons/*.svg")
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(svgstore({
      fileName: "icons.svg",
      prefix: "icon-",
      inlineSvg: true
    }))
    .pipe(cheerio({
      run: function ($) {
        $("[fill]").removeAttr("fill");
      },
      parserOptions: { xmlMode: false }
    }))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest("source/_includes/icons"));
});
