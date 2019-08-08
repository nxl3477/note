/** 
 * dom diff 的情况比较
 * 1. 属性发生了变化 { type: "attrs", attrs: { class: "list-new"} }
 * 2. 文本发生了变化 { type: "text", text: 1 }
 * 3. 节点被删除 { type: "REMOVE", index : 1 }
 * 4. 节点不一样了 { type: "REPLACE"， newNode: newNode }
*/
import _ from './util.js'
// 生成的补丁包
let patchs = {}
// 记录
let globalIndex = 0

// dom-diff的主要入口函数
function diff(oldTree, newTree) {
  dfswalk(oldTree, newTree, globalIndex)
  return patchs
}
// 深度优先遍历 -- 递归
function dfswalk(oldTree, newTree, globalIndex){
  // 记录当前批次的修改队列
  let currentPatchs = []
  console.log(oldTree, newTree, globalIndex)
  // 如果旧节点是文本
  if( _.isString(oldTree) ) {
    // 如果新树也是字符串 并且 但是不和新树相同
    if(_.isString(newTree) && oldTree !== newTree) {
      // 将当前的更改追加入当前需要修改的队列中
      currentPatchs.push({
        type: "TEXT",
        text: newTree
      })
    }

    // 如果类型相同的
  } else if( oldTree.type === newTree.type ) {
    // 调用对比属性的函数
    diffProps(oldTree.props, newTree.props)
    // 比节点 => 尾调用优化
    diffChildren(oldTree.children, newTree.children)
  }
  // 如果本次检测到了修改 把每一次diff的结果放到patchs
  if(currentPatchs.length > 0) {
    // 记录到对应的节点上sdcxz
    patchs[globalIndex] = currentPatchs
  }
}

// 对比两个dom的 属性
function diffProps() {
  // 对比props

}
// 负责循环新旧domde的子节点， 以旧节点的索引去匹配去匹配相应位置的新节点
function diffChildren(oldChildrens, newChildrens) {
  // 遍历旧dom ,对比相同索引的新dom
  oldChildrens.forEach((child, index) => {
    // 被循环后又去调用新旧dom的比对
    dfswalk(child, newChildrens[index], ++globalIndex)
  })
}



export {
  diff
}