import React, { Component } from 'react'
import {hot} from 'react-hot-loader'; 
import './app.scss'

class App extends Component {
  public state = {
    reactCount: 0,
    vueCount: 0
  }

  constructor(props) {
    super(props)
    window.eventBus.subscribe('addReactCount', (count) => {
      this.setState({
        reactCount: count
      })
    })
  }

  addReactHandle() {
    const { reactCount } = this.state
    this.setState({
      reactCount: reactCount + 1
    })
  }

  addVueHandle() {
    const { vueCount } = this.state
    const newCount = vueCount + 1
    window.eventBus.dispatch('addVueCount', newCount)
    this.setState({
      vueCount: newCount
    })
  }

  render() {
    return (
      <div className="react-wrap">
        <p>React 组件</p>
        <p>当前React 状态: { this.state.reactCount }</p>
        <button onClick={ () => this.addReactHandle() }>点我</button>
        <hr/>

        <p>当前Vue状态: { this.state.vueCount }</p>
        <button onClick={ () => this.addVueHandle() }>通信vue</button>
      </div>
    )
  }
}

declare const module: any; // 为了取消 ts报错
export default hot(module)(App);