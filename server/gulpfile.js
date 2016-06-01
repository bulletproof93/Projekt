var gulp = require('gulp');


gulp.task('copy_task', function() {
    gulp.src('*.html')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.js')
    .pipe(gulp.dest('../build/'));
    gulp.src('*.json')
    .pipe(gulp.dest('../build/'));
    gulp.src('css/*.css')
    .pipe(gulp.dest('../build/css'));
    gulp.src('data/*.js')
    .pipe(gulp.dest('../build/data'));
    gulp.src('js/*.js')
    .pipe(gulp.dest('../build/js'));
    gulp.src('lib/*.js')
    .pipe(gulp.dest('../build/lib'));
    gulp.src('partials/*.html')
    .pipe(gulp.dest('../build/partials'));
});


