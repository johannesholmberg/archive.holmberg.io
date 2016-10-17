var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    minimist = require('minimist');

gulp.task("svgstore", function () {
  return gulp
    .src("source/assets/icons/*.svg")
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(svgstore({
      fileName: "icons.svg",
      prefix: "icon-" }))
    .pipe(cheerio({
      run: function ($) {
        $("[fill]").removeAttr("fill");
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest("source/_includes/"));
});
