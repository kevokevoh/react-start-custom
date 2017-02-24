var gulp = require('gulp');
require('gulp-load-plugins')();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//Compile sass
gulp.task('sass', function () {
  gulp.src('assets/scss/*.scss')
    .pipe(sass.sync({includePaths: ['assets/scss/partials'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'));
});

//Concatenate scripts
gulp.task('scripts', function() {
  return gulp.src([
    'assets/js/custom.js',
    ])
    .pipe(concat('assets.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

//Watch for changes
gulp.task('watch', function() {
  gulp.watch(['assets/scss/*.scss','assets/scss/partials/*'], ['sass']);
  gulp.watch('assets/js/**', ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass','scripts','watch']);
