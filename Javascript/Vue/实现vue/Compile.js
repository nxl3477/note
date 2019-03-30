function Compile(node, vm) {
  if(node) {
    this.$frag = this.nodeToFragment(node, vm)
    return this.$frag
  }
}


Compile.prototype = {
  nodeToFragment(node, vm) {
    var _this = this
    // 创建文档片段
    var frag = document.createDocumentFragment()
    var child;
    while ( child = node.firstChild ) {
      // 替换变量
      _this.compileElement(child, vm)
      // 剪贴子元素
      frag.append(child)
    }
    return frag
  },
  compileElement(node, vm) {
    var reg = /\{\{(.*)\}\}/;
    // 节点类型为元素, 根据nodeType来判断
    if ( node.nodeType === 1 ) {
      // 获取自定义属性
      var attr = node.attributes
      for (var i = 0; i < attr.length; i++) {
        if (attr[i].nodeName == "v-model") {
          // 获取v-model 绑定的属性名
          var name = attr[i].nodeValue
          // 双向绑定
          node.addEventListener('input', function(e) {
            // 给相应的data属性赋值， 进而触发该属性的set方法
            // 再批处理渲染元素
            vm[name] = e.target.value 
          })
          // node.value = vm[name] //将data的值赋值给Node
          // 把this ，节点， 还有v-model绑定的变量交给watcher
          new Watcher(vm, node, name, "value")
        }
      }
    }

    // 节点类型为text
    if ( node.nodeType === 3 ) {
      if ( reg.test(node.nodeValue) ) {
        var name = RegExp.$1; // 获取匹配到的字符串
        name = name.trim()
        // node.nodeValue = vm[name]; // 将data 的值赋给该Node
         // 把this ，节点， 还有{{}}中使用的变量交给watcher
        new Watcher(vm, node, name, 'nodeValue')
      }
    }



  }
}