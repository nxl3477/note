const gulp = require('gulp');
// babel
const babel = require('gulp-babel')
// 监听文件
const watch = require('gulp-watch')
// 流清洗
const rollup = require('gulp-rollup')
const bro = require('gulp-bro')
const rollupReplace = require('rollup-plugin-replace')
const eslint = require('gulp-eslint');
// const path = require('path')
const entry = "./src/server/**/*.js"
// const gulpCopy = require('gulp-copy');
const clean = require('gulp-clean');


// 开发环境
function builddev() {
  return watch(entry, () => {
    gulp.src(entry)
      .pipe(babel({
        // 忽略外部的.babelrc 文件
        babelrc: false,
        // presets: ['es2015'],
        "plugins": [
          ["transform-es2015-modules-commonjs"]
        ]
      }))
      .pipe(bro())
      .pipe(gulp.dest('dist'))
  })
}
// 上线环境
function buildprod() {
  return gulp.src(entry)
    .pipe(babel({
      // 忽略外部的.babelrc 文件
      babelrc: false,
      // 过滤配置文件，以便于之后的流清洗
      ignore: ["./src/server/config/*.js"],
      // presets: ['es2015'],
      "plugins": [
        ["transform-es2015-modules-commonjs"]
      ]
    }))
    .pipe(gulp.dest('dist'))
}

// 清洗环境
function buildconfig() {
  return gulp.src(entry)
    // transform the files here.
    .pipe(rollup({
      output: {
        format: "cjs"
      },
      // any option supported by Rollup can be set here.
      input: ["./src/server/config/config.js"],
      plugins: [
        rollupReplace({
          "process.env.NODE_ENV": JSON.stringify('production')
        })
      ]
    }))
    .pipe(gulp.dest('dist'));
}

// 拷贝Json文件
function CopyPackage() {
  return gulp.src("./src/server/*.json")
    .pipe(gulpCopy("./"))
    .pipe(gulp.dest('dist/'));
}

// 清除旧文件
function cleanFiles() {
  return gulp
    .src('dist', {
      allowEmpty: true,
      read: false}
    )
    .pipe(clean());
}



// 对代码进行检查的环境
function buildlint() {
  return gulp.src(entry)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
}




let build = gulp.series(builddev)
if (process.env.NODE_ENV == "production") {
  // 上限操作, 环境清洗
  build = gulp.series(cleanFiles, buildprod, buildconfig)
}




if (process.env.NODE_ENV == "lint") {
  build = gulp.series(buildlint)
}


gulp.task("default", build)

// if (process.env.NODE_ENV == "development") {
//   gulp.watch(entry, builddev)
// }