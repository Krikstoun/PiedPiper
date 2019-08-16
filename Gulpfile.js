
'use strict';

var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('scss', function () {
gulp.src('style/**/*.scss')
.pipe(scss().on('error', scss.logError))
.pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
gulp.watch('style/**/*.scss', gulp.series('scss'));
});
