const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, '../static/item2bg.jpg'))
const ws = fs.createWriteStream(path.join(__dirname, '../static/stream01.jpg'))


rs.on('data', (chunk) => {
  // 查看是否缓冲数据被写入， 写入时true , 未写入是false
  if(ws.write(chunk) === false) {
    console.log('still cache')
    rs.pause()  // 暂停读流
  }
})
rs.on('end', () => {
  // 当没有数据再消耗后关闭数据流
  ws.end()
})


ws.on('drain', () => {
  console.log('数据被消耗事件');
  rs.resume() // 继续读流
})
