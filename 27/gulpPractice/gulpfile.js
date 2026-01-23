const { series, parallel, src, dest } = require('gulp');


const concat = require('gulp-concat');
function concatstyles(){
    return src('app/**/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/concat'));
}


const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
function minifyCSS() {
    return gulp.src('hw27/**/*.css')
    .pipe(cssmin())
        .pipe(gulp.dest('compressed'));
}


function clean(cb) {
console.log('Clean task');
  cb();
}

function build(cb) {
    console.log('Build task');
     cb();
   }

function test(){
//  return src('app/index.html').pipe(dest('dist/'));
return src(['app/**/*.css', 'app/*.html','!app/**/.scss']).pipe(dest('dist/'));
}



exports.test = test;
exports.build = build;
exports.concatstyles= concatstyles;
exports.minifyCSS = minifyCSS;
exports.default = series(clean, build,test);
// exports.default = parallel(clean, build, test);