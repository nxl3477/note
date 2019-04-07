import React, { Component, PureComponent } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUpdate() {
    console.log('我被更新了')
  }

  static defaultProps = {
    data: {
      thing: "这是默认的props参数"
    }
  }
  render() {
    return (
      <div>
        { this.props.data.thing }
      </div>
    )
  }
}

export default TodoItem