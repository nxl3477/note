const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, '../static/item2bg.jpg'))
const ws = fs.createWriteStream(path.join(__dirname, '../static/ws01.jpg'))

rs.on('data', (chunk) => {
  // 当有数据流出时， 写入数据
  ws.write(chunk)
})

rs.on('end', () => {
  // 当没有数据时, 关闭数据流
  ws.end()
})