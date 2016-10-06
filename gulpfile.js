var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    imageResize = require('gulp-image-resize'),
    iconify = require('gulp-iconify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    prefix = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    notify = require('gulp-notify'),
    critical = require('critical'),
    cp = require('child_process'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    minimist = require('minimist');

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

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Optimize all images before releasing them
 */
gulp.task('optimize-images', function() {
  return gulp.src('_site/uploads/dist/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('_site/uploads/dist'));
});

/**
 * Concatenate javascripts
 */
gulp.task('scripts', function() {
  return gulp.src([
    'assets/vendor/picturefill/dist/picturefill.js',
    'assets/js/source.dev.js'
  ])
  .pipe(concat('source.min.js'))
  .pipe(gulp.dest('_site/assets/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
  .pipe(gulp.dest('assets/js'));
});

/**
 * Minify javascripts
 */
gulp.task('minify-scripts', function() {
  return gulp.src('assets/js/source.min.js')
  .pipe(concat('source.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('_site/assets/js'))
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {

  gulp.src('_scss/cv.scss')
    .pipe(sass())
    .pipe(prefix(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('assets/css'));


  gulp.src('_scss/config.imports.scss')
    .pipe(sass({
      style: 'expanded',
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 5 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(rename({
      basename: 'styles',
      suffix: '.min'
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('assets/css'));
});


gulp.task("svgstore", function () {
  return gulp
    .src("assets/icons/*.svg")
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
    .pipe(gulp.dest("_includes/"));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch('_scss/**/*.scss', ['sass']);
  gulp.watch('assets/js/**/*.js', ['scripts']);
  gulp.watch('assets/icons/*.svg', ['svgstore']);
  gulp.watch(['**/*.html','**/*.md'], ['jekyll-rebuild']);
});

/**
 * Create images sizes for books
 */
gulp.task('resize-images', function() {

  var options = minimist(process.argv.slice(2));

  var source;

  if ( options.photos ) {
    source = 'uploads/content/photos/*';
  }
  else if ( options.writing ) {
    source = 'uploads/content/writing/*';
  }
  else if ( options.work ) {
    source = 'uploads/content/work/*';
  }
  else if ( options.reading ) {
    source = 'uploads/content/reading/*';
  }
  else if ( options.labs ) {
    source = 'uploads/content/labs/*';
  }
  else {
    source = 'uploads/content/others/*';
  }

  var dest = 'uploads/dist';

  gulp.src(source)
    .pipe(imageResize({
      width: 2600,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-2600'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 2000,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-2000'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 1400,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-1400'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 1000,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-1000'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 800,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-800'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 600,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-600'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 400,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-400'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 320,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-320'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 240,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-240'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 140,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-140'
    }))
    .pipe(gulp.dest(dest));

  console.log('Resized images');
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['watch', 'svgstore', 'browser-sync']);

gulp.task('jekyll', ['jekyll-build']);
gulp.task('release', ['move', 'minify-scripts']);
