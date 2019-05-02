import React, { Component } from 'react'
let times = 1
class LifeCycle extends Component {
  constructor(props) {
    super(props)
    // console.log('🍉', this)
    this.state = {}
  }

  // componentWillMount() {
  //   console.log('---componentWillMount---')
  // }
  componentDidMount() {
    // console.log('---componentDidMount---')
  }
  
  // 判断是否更新
  shouldComponentUpdate() {
    // console.log('---shouldComponentUpdate---')
    return true
  }
  // 即将更新
  // componentWillUpdate() {
  //   console.log('---componentWillUpdate---')
  // }
  // 将接收到props
  // componentWillReceiveProps() {
  //   console.log('---componentWillReceiveProps---')
  // }
  // 完成更新
  componentDidUpdate() {
    // console.log('---componentDidUpdate---')
  }
  
  // static getDerivedStateFromProps(nextProps, prevProps) {
  //   console.log('---getDerivedStateFromProps---')
  //   const { age } = nextProps
  //   if( age !== prevProps.age ) {
  //     console.log('ok')
  //     // return { fuck: 'okk' }
  //     return null
  //   }
  //   return null
  // }
  

  static getDerivedStateFromProps(nextProps, prevProps) {
    return { age: nextProps.age }
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`---第${times++}次renders---`)
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
  }


  render() {
    const test = Math.random() * 10
    // console.log(this.state)
    // console.log('---render---')
    return (
      <div>
        age:{this.props.age}
        <br/>
        test: { test }
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