const gulp = require('gulp');
const { join } = require('path')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
// 指定文件模式
// const path = ['src/index.js', 'src/test.js']


gulp.task('default', function(cb) {
  // 将你的默认的任务代码放在这
  // pump([
  //   gulp.src('src/*.js'),
  //     uglify(),
  //     gulp.dest('dist')
  // ],
  // cb
  // );
  // 匹配模式
  return gulp.src(join(__dirname, 'src/*.js'))
      // point free 风格 流式编程， 上一个的输出等于下一个的输入
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('build'))
    

});