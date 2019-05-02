import React, { memo, Component } from 'react'

// 创建一个函数组件
function Child({ name }) {
  console.log('I am rendering')
  return <div>Memo组件 name => { name }</div>
}
// 注意 函数组件没有state , 显式的shouldComponentUpdate
function areEqual(prevProps, nextProps) {
  if( prevProps.name === nextProps.name ) {
    return true
  } else {
    return false
  }
}
const DemoComponent = memo(Child, areEqual)


export default class Menotest extends Component {
  render() {
    return (
      <div>
        {/* seconds作为Props传入 */}
        <DemoComponent name="小明" />
      </div>
    )
  }
}
