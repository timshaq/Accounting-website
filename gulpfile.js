const gulp = require('gulp');
const concat = require('gulp-concat');
const autopref = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const jsFiles = [
    './src/js/*.js'
]

function presass() {
    return gulp.src('./src/sass/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(autopref({
        browserlist: ['> 1%'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2 
    }))
    .pipe(sourcemaps.write('../../'))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src(jsFiles)

    .pipe(concat('script.js'))
    .pipe(uglify({
        toplevel: true
    }))

    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream())
}

function clean() {
    return del(['build/*', 'img/*'])
}


 function compress() {
  return gulp.src('src/img/*')
  .pipe(imagemin({
  	quality: 60
  }))
  .pipe(gulp.dest('./img'))
  .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/sass/**/*.sass', presass)
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch('./src/img/**/*', compress)
    gulp.watch("./*.html").on('change', browserSync.reload);
}


gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(presass, scripts, compress)));
gulp.task('dev', gulp.series('build', 'watch'));
gulp.task('del', clean);
gulp.task('compress', compress);
gulp.task('presass', presass);