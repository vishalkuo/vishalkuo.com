/**
 * Created by vishalkuo on 15-08-19.
 */
var gulp = require('gulp'), uglify = require('gulp-uglify'), minifyHTML = require('gulp-minify-html'), minifyCss = require('gulp-minify-css')
rename = require('gulp-rename'), nodemon = require('gulp-nodemon'), exec = require('gulp-exec'), runSequence = require('run-sequence')

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

gulp.task('backup-repos', function(){
    gulp.src('./home/assets/repos.js')
        .pipe(rename('repos.backup.js'))
        .pipe(gulp.dest('./home/assets'))
})

gulp.task('pipe-scrubber', function(){
    gulp.src('./gs_build')
        .pipe(exec('> ./gs_build/out.js'))
        .pipe(exec('node ./gs_build/scrub.js >> ./gs_build/out.js'))
    gulp.src('./gs_build/out.js')
        .pipe(rename('repos.js'))
        .pipe(gulp.dest('./home/assets/'))
})


gulp.task('scrub', function(){
    runSequence('backup-repos', 'pipe-scrubber')
})

gulp.task('default', ['controllers', 'minify-html', 'minify-css', 'assets'], function(){
})