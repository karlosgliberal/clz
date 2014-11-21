var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    processhtml = require('gulp-processhtml'),
    minifycss = require('gulp-minify-css'),
    es6ModuleTranspiler = require('gulp-es6-module-transpiler'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    // imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    //browserSync = require('browser-sync'),
    path = require('path'),

function errorHandler(error, error_type) {
    var notifier = new nn.NotificationCenter();
    notifier.notify({
        title: "¡¡ERROR!!",
        message: error.message
    });
    console.error("\n" + error.message + "\n");
    this.emit('end');
}

var notifier = new nn.NotificationCenter()

var paths = {
    develop: 'project',
    product: 'dist',
    ios: '../ios_clz/platforms/ios/www',
    android: '../android_clz/www'
};

// General tasks
gulp.task('lint', function () {
    return gulp.src([paths.develop + '/js/**/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .on('error', function () {
            console.warn('Error: JSHint encountered an error');
        });
});


gulp.task('clean', function() {
    rimraf(paths.product, function(err) {
        gutil.color.red(err);
    });
});

gulp.task('compile', ['html', 'styles', 'scripts']);

// Development tasks
gulp.task('html', function () {
    return gulp.src(paths.develop + '/index.html')
        //.pipe(browserSync.reload({ stream: true }))
        .pipe(connect.reload());
});


gulp.task('styles', function () {
    return gulp.src(paths.develop + '/css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest(paths.develop))
        // .pipe(browserSync.reload({ stream: true}))
        .pipe(connect.reload())
        .on('error', gutil.log);
});

gulp.task('scripts', ['lint'], function () {
    return gulp.src(paths.develop + '/js/**/*.js')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(es6ModuleTranspiler({
            type: 'amd'
        }))
        .pipe(concat('game.js'))
        .pipe(gulp.dest('./project'))
        // .pipe(browserSync.reload({ stream: true, once: true }));
        .pipe(connect.reload());
});


function logChanges(event) {
    gutil.log(
        gutil.colors.green('File ' + event.type + ': ') +
        gutil.colors.magenta(path.basename(event.path))
    );
}
gulp.task('watch', function() {
    gulp.watch(paths.develop + '/js/**/*.js', ['scripts'])
        .on('change', logChanges);
    gulp.watch(paths.develop + '/css/*.css', ['styles'])
        .on('change', logChanges);
    gulp.watch(paths.develop + '/index.html', ['html'])
        .on('change', logChanges);
});

gulp.task('connect', function() {
  connect.server({
    root: 'project',
    livereload: true,
    port: 5000
  });
});


// Production tasks
gulp.task('process-html', function() {
    return gulp.src(paths.develop + '/index.html')
        .pipe(processhtml('index.html'))
        .pipe(gulp.dest(paths.product))
        .pipe(gulp.dest(paths.ios))
        .pipe(gulp.dest(paths.android))
        .on('error', gutil.log);
});

gulp.task('minifycss', function () {
    return gulp.src(paths.develop + '/css/*.css')
        .pipe(minifycss({
            keepSpecialComments: false,
            removeEmpty: true
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest(paths.product))
        .pipe(gulp.dest(paths.ios))
        .pipe(gulp.dest(paths.android))
        .on('error', gutil.log);
});

gulp.task('uglify', ['scripts'], function () {
  return gulp.src([
      './project/bower_components/almond/almond.js',

      './project/bower_components/phaser-official/build/custom/phaser-arcade-physics.js',

      './project/game.js'
  ])
  .pipe(concat('game.js'))
  .pipe(uglify())
  .pipe(gulp.dest(paths.product))
  .pipe(gulp.dest(paths.ios))
  .pipe(gulp.dest(paths.android))
  .on('error', gutil.log);
  }
);


gulp.task('process-assets', function () {
    gulp.src(['project/assets/**/*'])
        // .pipe(imagemin())
        .pipe(gulp.dest(paths.product + '/assets'))
        .pipe(gulp.dest(paths.ios + '/assets'))
        .pipe(gulp.dest(paths.android + '/assets'))
        .on('error', gutil.log);
    gulp.src(['project/*.png', 'project/*.ico', 'project/*.xml', 'project/*.manifest'])
        .pipe(gulp.dest(paths.product))
        .pipe(gulp.dest(paths.ios))
        .pipe(gulp.dest(paths.android))
        .on('error', gutil.log);
});

// Runnable tasks
gulp.task('default', ['compile', 'watch', 'connect']);
gulp.task('build', ['clean', 'process-html', 'minifycss', 'uglify', 'process-assets']);
