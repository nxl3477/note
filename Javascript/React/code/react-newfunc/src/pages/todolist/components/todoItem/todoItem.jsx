import React, { Component, PureComponent } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillUpdate() {
  //   console.log('我被更新了')
  // }

  render() {
    return (
      <div>
        { this.props.thing }
      </div>
    )
  }
}

export default TodoItem