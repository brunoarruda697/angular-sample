const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src('src/assets/*')
    .pipe(imagemin({}, { verbose: true }))
    .pipe(gulp.dest('src/assets'))
});
