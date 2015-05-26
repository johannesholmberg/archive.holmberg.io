var gulp = require('gulp');
var browserSync = require('browser-sync');
var imageResize = require('gulp-image-resize');
var iconify = require('gulp-iconify');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
var critical = require('critical');
var cp = require('child_process');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
  return cp.spawn('jekyll', ['build'], {
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

gulp.task('copystyles', function() {
  return gulp.src(['_site/assets/css/main.min.css'])
    .pipe(rename({
      basename: "site"
    }))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('move-images', function() {
  return gulp.src('app/assets/images/johannes/*')
    .pipe(gulp.dest('app/assets/images/dist'));
});

gulp.task('optimize-images', function() {
  return gulp.src('app/assets/images/dist/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('app/assets/images/dist'));
});

gulp.task('scripts', function() {
  return gulp.src([
    'app/assets/js/vendor/picturefill/dist/picturefill.js',
    'app/assets/js/app.dev.js'
    ], {
    base: 'assets/'
  })
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('app/assets/js'));
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {
  gulp.src('app/_scss/main.scss')
    .pipe(sass({
      style: 'expanded',
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(gulp.dest('app/assets/css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  // iconify({
  //   src: 'assets/images/icons/*.svg',
  //   pngOutput: 'assets/images/icons/png',
  //   scssOutput: '_scss/icons',
  //   cssOutput:  '_scss/icons',
  //   defaultHeight: '47px',
  //   svgoOptions: {
  //     enabled: false
  //   }
  // });
  gulp.watch('app/_scss/**/*.scss', ['sass']);
  gulp.watch('app/assets/js/**/*.js', ['scripts']);
  gulp.watch([
    'app/index.html',
    'app/styleguide/*.html',
    'app/_layouts/*.html',
    'app/_includes/*.html',
    'app/_posts/**/*',
    'app/_drafts/*'
  ], ['jekyll-rebuild']);
});

/**
 * Create images sizes for books
 */
gulp.task('book-images', function() {

  var source = 'app/assets/images/reading/*';
  var dest = 'app/assets/images/dist';

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
      width: 240,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-240'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 200,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-200'
    }))
    .pipe(gulp.dest(dest));

  gulp.src(source)
    .pipe(imageResize({
      width: 160,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-160'
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

  gulp.src(source)
    .pipe(imageResize({
      width: 100,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-100'
    }))
    .pipe(gulp.dest(dest));

  console.log('Resized images');
});

/**
 * Create images sizes for articles
 */
gulp.task('article-images', function() {

  var source = 'app/assets/images/journal/*';
  var dest = 'app/assets/images/dist';

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

  console.log('Resized images');
});

/**
 * Create images sizes for cases
 */
gulp.task('case-images', function() {

  // Inline images
  var source = 'app/assets/images/work/inlines/*';
  var dest = 'app/assets/images/dist';
  gulp.src(source)
    .pipe(imageResize({
      width: 1600,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-1600'
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
      width: 760,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-760'
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
      width: 320,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-320'
    }))
    .pipe(gulp.dest(dest));

  // Case images
  source = 'assets/images/work/cases/*';
  gulp.src(source)
    .pipe(imageResize({
      width: 1220,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-1220'
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
      width: 700,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-700'
    }))
    .pipe(gulp.dest(dest));
  gulp.src(source)
    .pipe(imageResize({
      width: 610,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-610'
    }))
    .pipe(gulp.dest(dest));
  gulp.src(source)
    .pipe(imageResize({
      width: 500,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-500'
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

  // Cover images
  source = 'assets/images/work/covers/*';
  gulp.src(source)
    .pipe(imageResize({
      width: 3000,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-3000'
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
      width: 1500,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-1500'
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
      width: 320,
      imageMagick: true
    }))
    .pipe(rename({
      suffix: '-320'
    }))
    .pipe(gulp.dest(dest));

  console.log('Resized images');
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['watch', 'scripts', 'move-images', 'optimize-images', 'browser-sync']);
