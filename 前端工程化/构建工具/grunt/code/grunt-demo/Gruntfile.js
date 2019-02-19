module.exports = function (grunt) {
  // 注册的test 和这里的初始配置一一对应
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        // 顶部插入内容
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      // 控制静态资源从哪来到哪去
      my_target: {
        files: {
          'build/index.min.js': ['src/index.js'],
          'build/main.min.js': ['src/main.js']
        }
      }
    },
    // 合并 代码
    concat: {
      bar: {
        src: ['build/*.js'],
        dest: 'dest/all.min.js'
      }
    },
  // 监听代码改动， 实时重新打包生成
    watch: {
      files: ['js/index.js'],
      tasks: ['uglify', 'concat']
    }
  });
  // 加载用到的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');  // 压缩
  grunt.loadNpmTasks('grunt-contrib-concat');  // 合并
  grunt.loadNpmTasks('grunt-contrib-watch');  // 监听代码改动， 实时重新打包生成

  // // 默认被执行的任务列表。
  // grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['uglify', 'concat', 'watch']);
};