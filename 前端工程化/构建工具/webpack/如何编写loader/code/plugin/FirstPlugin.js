const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  // 每个插件必备的方法
  apply(compiler) {
    // compiler 是整个webpack编译的核心
    // tap 可以理解为触发订阅
    // compilation 是当前运行的所有 chunk
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('🍎The webpack build process is starting!!!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;


