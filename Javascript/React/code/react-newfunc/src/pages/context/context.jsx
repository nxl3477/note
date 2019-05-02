import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext("default")
class Parent extends Component {
  state = {
    name: "张三",
    age: 12
  }

  render() {
    const { name, age } = this.state
    return (
      <div>
        姓名：
        <input  onChange={ e=> this.setState({ name: e.target.value })} value={name} />
        年龄:
        <input  onChange={ e=> this.setState({ age: e.target.value })}  value={age} />

        <Provider value={{ name, age }}>
          {this.props.children}
        </Provider>
      </div>
    )
  }
}


function Child01() {
  return (
    <Consumer>
      {
        value => (
          <div>{value.name}</div>
        )
      }
    </Consumer>
  )
}


function Child02() {
  return (
    <Consumer>
      {
        value => (
          <div>{value.age}</div>
        )
      }
    </Consumer>
  )
}


export default () => (
  <Parent >
    <Child01 />
    <Child02 />
  </Parent>
)