let gulp = require('gulp');

// let requireDir = require('require-dir');
let sass = require('gulp-sass')(require('sass'));
let cssmin = require('gulp-cssmin');
// let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');

gulp.task('style', function (done) {
 gulp.src('css/*.sass')
     .pipe(sass())
     .pipe(gulp.dest('css/'));
 gulp.src('css/*.css')
     .pipe(cssmin())
     .pipe(gulp.dest('build/css'));
 done();
});

gulp.task("js", function () {
 return gulp.src("js/*.js")
     .pipe(uglify())
     .pipe(gulp.dest("build/js"));
});

gulp.task('html', () => {
 return gulp.src('*.html')
     .pipe(htmlmin({ collapseWhitespace: true }))
     .pipe(gulp.dest('build'));
});

gulp.task('move-images',function(){
 return gulp.src([
  'img/*.svg',
  'img/*.jpg'
 ])
     .pipe(gulp.dest('build/img'));
});

gulp.task('move-favicon',function(){
 return gulp.src('*.ico')
     .pipe(gulp.dest('build'));
});

gulp.task('move-fonts',function(){
 return gulp.src([
  'fonts/*.woff',
  'fonts/*.woff2'
 ])
     .pipe(gulp.dest('build/fonts'));
});
