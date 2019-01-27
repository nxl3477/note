const express = require('express');
const path = require('path')
const app = express();
const server = app.listen(3000)
// 监听了express 服务 ， 所以也是3000端口
const io = require('socket.io').listen(server)

app.use('/views', express.static(path.join(__dirname, 'public')))
app.get('/', async (req, res)  => {
    
})

// websocket 连接监听
io.on('connection', socket => {
    socket.emit('open')
    // 对Message 事件的监听, message是自定义的字段， 可以不叫message,只要前后端对应上就可以
    socket.on('message', (msg) => {
        console.log('服务器也接收到消息:' + msg.name)
        // 单对单后端推送信息， 
        socket.emit('message', msg.name)
        // 这是广播的向其他用户发送信息
        socket.broadcast.emit('message', msg.name)
    })
    
    


    // 监听退出事件
    socket.on('disconnect', () => {
        console.log('聊天退出了')
    })
})