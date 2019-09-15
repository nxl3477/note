const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')
// mock 一段代码
const code = ` const view = {
  a: 3,
  init: () => {
    view.a = 5
  },
  render: () => {

  }
}
`
// 将代码转为 ast
const ast = esprima.parse(code)
console.log(ast)
// 遍历ast 修改相关操作
estraverse.traverse(ast, {
  enter(node) {
    if( node.type === "VariableDeclaration" ) {
      node.kind = 'var'
    }
  }
})
// 得到经过ast处理的 js 代码 
const reg_code = escodegen.generate(ast)
console.log('--------- 输出结果 ---------------')
console.log(JSON.stringify(reg_code, null,4))

