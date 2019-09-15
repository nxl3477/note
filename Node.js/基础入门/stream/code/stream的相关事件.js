const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname, '../static/item2bg.jpg')  )
let n = 0 

rs.on('data', chunk => {
  n++
  console.log('--------------------')
  console.log(`第${n}次传输事件`);
  console.log(chunk)
  console.log('--------------------')
})
.on('end', () => {
  console.log('传输结束');
})
.on('close', () => {
  console.log(`第${n}次时， 关闭事件触发`)
})
.on('error', (e) => {
  console.log('传输错误', e);
})

