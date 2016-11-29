var gulp = require('gulp'),
    critical = require('critical');

gulp.task('critical', function() {

  // Run critical for these different page types and generate a minified css file for each
  var base = '_site/',
      css = 'source/assets/css/styles.css',
      width = 1900,
      height = 1200,
      minify = false,
      ignore = ['@font-face'];

  // Index
  critical.generate({
    base: base,
    src: 'index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/index.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Notebook
  critical.generate({
    base: base,
    src: 'notebook/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/notebook.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Work
  critical.generate({
    base: base,
    src: 'work/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/work.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Reading
  critical.generate({
    base: base,
    src: 'reading/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/reading.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Post
  critical.generate({
    base: base,
    src: 'notebook/2015/10/new-place/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/post.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Case
  critical.generate({
    base: base,
    src: 'work/chemistry-interaction/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/case.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

  // Book
  critical.generate({
    base: base,
    src: 'reading/2016/10/farnhams-freehold/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/book.css',
    width: width,
    height: height,
    ignore: ignore,
    minify: minify
  });

});
