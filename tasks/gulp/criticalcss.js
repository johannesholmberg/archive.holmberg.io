var gulp = require('gulp'),
    critical = require('critical');

gulp.task('critical', function() {

  // Run critical for these different page types and generate a minified css file for each
  var base = '_site/'
  var css = 'source/assets/css/styles.css';
  var width = 1800;
  var height = 1400;
  var minify = true;

  // Index
  critical.generate({
    base: base,
    src: 'index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/index.css',
    width: width,
    height: height,
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
    minify: minify
  });

  // Post
  critical.generate({
    base: base,
    src: 'notebook/takeaways-from-smashingconf/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/post.css',
    width: width,
    height: height,
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
    minify: minify
  });

  // Book
  critical.generate({
    base: base,
    src: 'reading/farnhams-freehold/index.html',
    css: [css],
    dest: 'source/_includes/criticalcss/book.css',
    width: width,
    height: height,
    minify: minify
  });

});