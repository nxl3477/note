export default {
  input: 'src/main.js',
  output: {
    // 产出源文件去向
    sourceMap: true,
    file: 'dist/bundle.js',
    // 修改导出规范
    format: "umd"
  }
}