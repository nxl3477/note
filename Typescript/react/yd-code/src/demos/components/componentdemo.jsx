//新增了render 新的返回类型：fragments 和 strings
import React, { Component } from "react";
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  static defaultProps = {
    name: "普通Component组件"
  };
  render() {
     return <h4 className="text-warning">Hello, {this.props.name}</h4>;
    // return '我是一个字符串组件 🚀!';
    // return [
    //   // 不要忘记 key :)
    //   <li key="A">First item</li>,
    //   <li key="B">Second item</li>,
    //   <li key="C">Third item</li>,
    // ];
  }
}
export default Greeting;