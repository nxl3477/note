const axios = require('axios')
const { baseUrl } = require('../../../config/config')

describe("node接口测试", () =>{
  it("test接口测试", function(done) {
    axios
      .get(`${baseUrl}index`)
      .then(res => {
        if(res.data.errorCode == 0) {
          done()
        }else {
          // 如果失败了
          done(new Error("接口报错"))
        } 
      })
      .catch((err)  =>{
        done(err)
      })
  })
})