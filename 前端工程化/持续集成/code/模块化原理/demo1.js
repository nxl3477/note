var node = document.createElement('script')
node.type = 'text/javascript'
node.src = '1.js'

// 给该节点添加onload事件，标签上onload，这里是load，见事件那里的知识点
// 1.js 加载完后onload的事件
node.addEventListener('load', function(evt) {
    // 开始加载 2.js
    var node2 = document.createElement('script')
    node2.type = 'text/javascript'
    node2.src = '2.js'
    // 插入 2.js script 节点
    document.body.appendChild(node2)
})
// 插入 1.js script 节点
document.body.appendChild(node)