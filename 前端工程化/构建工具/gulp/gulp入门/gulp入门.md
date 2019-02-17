# gulp 入门
> 官网： https://www.gulpjs.com.cn/

gulp利用nodejs强大的流(stream)，不需要往磁盘写中间文件，直接将最后结果输出写入磁盘。所以速度比较快

gulp 打包的文件是需要我们自己require进来的

而且gulp默认是不支持es6的， 你得想办法先进行转换



## gulp 插件使用
gulp的插件以流式编写， point free 风格， 上一个pipe的输出是下一个的输入

记得return


```
return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build'))
```




## 起步
说实话， 官网手册还是挺详细的

1. 全局安装 gulp：
> $ npm install --global gulp

2. 作为项目的开发依赖（devDependencies）安装：
> $ npm install --save-dev gulp

3. 在项目根目录下创建一个名为 gulpfile.js 的文件：

```
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

```

4. 运行 gulp：
```
gulp
```


默认的名为 default 的任务（task）将会被运行，在这里，这个任务并未做任何事情。

想要单独执行特定的任务（task），请输入 `gulp <task> <othertask>。`

