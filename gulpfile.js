var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    sass    = require('gulp-sass'),
    gulpif  = require('gulp-if'),
    connect = require('gulp-connect'),

    output = 'builds/development/',
    env = process.env.NODE_ENV || 'development';


    gulp.task('jade', function() {
      return gulp.src('src/templates/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(output))
        .pipe(connect.reload());
    });

    gulp.task('sass', function() {
      return gulp.src('src/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest(output + 'css'))
        .pipe(connect.reload());
    });

    gulp.task('image', function() {
      return gulp.src('src/images/*')
        .pipe(gulp.dest(output + 'images'));
    });

    gulp.task('connect', function() {
      connect.server({
        port: 3000,
        root: output,
        livereload: true
      });
    });

    gulp.task('watch', function() {
      gulp.watch('src/templates/**/*.jade', ['jade']);
      gulp.watch('src/sass/**/*.sass', ['sass']);
    });

    gulp.task('default', ['connect', 'image', 'watch']);
