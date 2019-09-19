const createTest = require('./create.spec')
const updateTest = require('./update.spec')
const option = {
  headless: false
}


const queue = [
  createTest,
  updateTest
]

;(async () => {
  for await (const item of queue) {
    const result = await item(option)

    if( !result ) {
      return console.log('测试失败啦')
    }
  }
  console.log('测试通过')
})();