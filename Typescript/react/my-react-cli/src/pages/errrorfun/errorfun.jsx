import React, { Component } from 'react'

export default class Errorfun extends Component {

  constructor( props) {
    super(props)
    this.state = { hasError: false }
  }

  // 捕捉错误和错误上报程序库一起使用
  componentDidCatch(err, info) {
    this.setState({ hasError: true })
  }

  render() {
    if ( this.state.hasError ) {
      return <div>Somthing error </div> 
    }

    return (
      <div>
        Hello React
      </div>
    )
  }
}
