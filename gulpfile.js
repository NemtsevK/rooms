let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let htmlmin = require('gulp-htmlmin');

function convertSass() {
    return gulp.src('./css/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
}

gulp.task('convert-sass', function (done) {
    convertSass();
    done();
});

function minCss() {
    return gulp.src(['./css/*.css', '!!./css/*.min.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
}

function minJs() {
    return gulp.src(['./js/*.js', '!!./js/*.min.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'));
}

function minHtml() {
    return gulp.src(['./*.html', '!!./*.min.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
}

gulp.task('minification', function (done) {
    minCss();
    minJs();
    minHtml();
    done();
});

function moveCss() {
    return gulp.src('./css/*.css')
        .pipe(gulp.dest('build/css'));
}

function moveJs() {
    return gulp.src('./js/*.js')
        .pipe(gulp.dest('./build/js'));
}

function moveHtml() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./build'));
}

function moveImages() {
    return gulp.src(['./img/*.svg', './img/*.jpg'])
        .pipe(gulp.dest('./build/img'));
}

function moveFavicon() {
    return gulp.src('./*.ico')
        .pipe(gulp.dest('./build'));
}

function moveFonts() {
    return gulp.src(['./fonts/*.woff', './fonts/*.woff2'])
        .pipe(gulp.dest('./build/fonts'));
}

gulp.task('build-project', function (done) {
    moveCss();
    moveJs();
    moveHtml();
    moveImages();
    moveFavicon();
    moveFonts();
    done();
});