var gulp = require('gulp'),
    uglifyjs = require('gulp-uglifyjs'),
    sass = require('gulp-sass'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel');


var root = "./app",
    OUT = root + "/dist",
    IN = root + "/src";

// compile jade
gulp.task('jade', function () {
    return gulp.src(IN + '/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest(OUT + "/"))
});

//compile sass
gulp.task('sass', function () {
    gulp.src(IN + '/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({
            basename: "app"
        }))
        .pipe(gulp.dest(OUT + '/'))
        .pipe(browserSync.stream());
});

//compile babel
gulp.task('js', function () {
    gulp.src(IN + '/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(OUT + "/"));
});

gulp.task('default', ['jade', 'js', 'sass']);

gulp.task("build", function(){
    var src = "./src/superModal.js", 
        build = "./build";
    // to es6 folder
    gulp.src(src)
        .pipe(gulp.dest(build + "/es6/"));
    // to es5
    gulp.src(src)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(build + "/es5/"));
    gulp.src(build + "/es5/superModal.js")
        .pipe(uglifyjs("superModal.min.js"))
        .pipe(gulp.dest(build + "/es5/"));

});