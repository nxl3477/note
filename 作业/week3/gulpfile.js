const gulp = require('gulp');
// babel
const babel = require('gulp-babel')
// 监听文件
const watch = require('gulp-watch')
// 流清洗
const rollup = require('gulp-rollup')

const entry = "./src/**/*.js"

// 开发环境
function builddev() {
  return watch(entry, {
    // 忽略初始化
    ignoreInitial: false
  }, function () {
    gulp.src(entry)
      .pipe(babel({
        // 忽略外部的.babelrc 文件 
        babel: false,
        "plugins": [
          ["transform-es2015-modules-commonjs"]
        ]
      }))
      .pipe(gulp.dest('dist'))
  })

}
// 上线环境
function buildprod() {}
// 对代码进行检查的环境
function buildlint() {}
// 清洗环境
function buildconfig() {}


let build = gulp.series(buildev)
if (process.env.NODE_ENV == "production") {
  // 上限操作和环境清洗
  build = gulp.series(buildprod, buildconfig)
}


if (process.env.NODE_ENV == "development") {

}




if (process.env.NODE_ENV == "lint") {
  build = gulp.series(buildlint)
}


gulp.task("default", build)