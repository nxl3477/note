const acorn = require("acorn")
const walk = require('acorn-walk')

console.log(acorn.parse("const a = 20"))
walk.simple(acorn.parse('let x = 10'), {
  Literal(node) {
    console.log(`Found a literal: ${node.value}`)
  }
})