var gulp = require('gulp');

gulp.task('default', function () {
  // 将你的默认的任务代码放在这
  gulp
    .src('./src/views/**/*.*')
    .pipe(gulp.dest('dist/views'))
  gulp.src('./src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'))
  return gulp.src('./src/components/**/*.*')
    .pipe(gulp.dest('dist/components'))

});