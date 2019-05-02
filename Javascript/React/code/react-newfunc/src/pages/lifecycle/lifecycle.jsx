import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('---componentWillMount---')
  }
  componentDidMount() {
    console.log('---componentDidMount---')
  }
  
  // 判断是否更新
  shouldComponentUpdate() {
    console.log('---shouldComponentUpdate---')
    return true
  }
  // 即将更新
  componentWillUpdate() {
    console.log('---componentWillUpdate---')
  }
  // 将接收到props
  componentWillReceiveProps() {
    console.log('---componentWillReceiveProps---')
  }
  // 完成更新
  componentDidUpdate() {
    console.log('---componentDidUpdate---')
  }
  render() {
    console.log('---render---')
    return (
      <div>
        age:{this.props.age}
      </div>
    )
  }
}
export default class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      age: 12
    }
  }



  render() {
    return (
      <>
        <button onClick={e => this.setState({ age: ++this.state.age }) }>增加年龄</button>
        <LifeCycle age={this.state.age}></LifeCycle>
      </>
    )
  }

}