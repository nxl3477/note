const axios = require('axios')

describe("node 接口测试", function() {
  it('test接口测试', function(done) {
    axios.get('http://localhost:3000/test').then(res => {
      if(res.data.result === 'Hello World!') {
        // 成功了就执行done 
        done()
      }else{
        // 失败了就传入异常
        done(new Error("数据"))
      }
    }).catch(e => {
      done(e)
    })
  })
})