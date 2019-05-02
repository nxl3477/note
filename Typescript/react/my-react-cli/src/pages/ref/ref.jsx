import React, { Component } from 'react'

const TargetComponent = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})


export default class Reftest extends Component {
  constructor(props) {
    super(props);
    // 创建ref
    this.myRef = React.createRef();
  }
  componentDidMount() {
    // 改变value
    this.myRef.current.value = "传递ref成功"
  }
  render() {
    // 挂载 ref
    return <TargetComponent ref={this.myRef} />
  }
}
