const stream = require('stream')


class ReadStream extends stream.Readable {
  constructor() {
    super()
  }
  _read() {
    this.push('read01')
    this.push('reado2')
    this.push('read03')
    this.push(null)
  }
}

class WriteStream extends stream.Writable {
  constructor() {
    super()
  }

  _write(chunk, ev, cb) {
    console.log('write::', chunk.toString())
    cb()
  }
}

class TransformStream extends stream.Transform {
  constructor() {
    super()
  }
  // 
  _transform(chunk, encode, cb) {
    console.log('transofrm::', chunk.toString())
    this.push(chunk)
    cb()
  }
  // 当没有更多数据要被消费时，就会调用这个方法, 所以在最后被调用
  _flush(cb) {
    console.log('flush:: => flush')
    this.push('flush')
    cb()
  }
}

const rs = new ReadStream()
const ws = new WriteStream()
const ts = new TransformStream()

rs.pipe(ts).pipe(ws)
