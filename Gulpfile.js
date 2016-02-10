var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('hello', function(done){
  console.log('NJPW');
});

gulp.task('uglify', function(){
  gulp.src('js/script.js') // What files do we want gulp to consume?
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(uglify()) // Call the uglify function on these files
      .pipe(gulp.dest('./build'))
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      })); // Where do we put the result?
});

gulp.task('watch', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(['js/script.js'], ['uglify']);
  gulp.watch(['.build/script.js', 'index.html']).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
