/**
 * Created by vishalkuo on 15-08-19.
 */
var gulp = require('gulp'), gutil = require('gulp-util'), uglify = require('gulp-uglify'), rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'), minifyCss = require('gulp-minify-css')

gulp.task('controllers', function(){
    gulp.src('./home/controllers/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/controllers/'))
})

gulp.task('assets', function(){
    gulp.src('./home/assets/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/assets'))
})

gulp.task('minify-html', function() {
    var opts = {
        conditionals: true,
        spare:true
    }
    gulp.src('./home/**/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('minify-css', function(){
    gulp.src('./home/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('default', ['controllers', 'minify-html', 'minify-css', 'assets'], function(){
})