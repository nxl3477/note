import React, { Component, Fragment } from 'react'
import TodoItem from './components/todoItem/todoItem'
import './todolist.scss'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      todoList: [
        { id: 1, thing: '喝可乐' },
        { id: 2, thing: '打游戏' },
      ] 
    }
  }

  addThing() {
    console.log('触发setState')
    let todoList = this.state.todoList
    const rd = Math.random() * 30
    todoList.push({
      thing: `事情:${rd}`
    })
    // todoList.splice(3, 0, {
    //   thing: `事情:${rd}`
    // })

    // todoList = todoList.map(i => ({...i}))
    // todoList = JSON.parse( JSON.stringify(todoList) )

    // todoList.map(i => {
    //   i[rd] = rd
    // })

    // todoList = todoList.map(i => {
    //   i[rd] = rd
    //   i['id'] = rd
    //   return { ...i }
    // })

    this.setState(() => ({
      todoList
    }))
  }
  noChange() {
    console.log('修改前', this.state)
    let todoList = this.state.todoList
    const rd = Math.random() * 30
    todoList.push({
      thing: `${rd}`
    })
    console.log('触发setState')
    this.setState(() => ({
      todoList
    }))

    console.log('修改后', this.state)
  }


  render() {
    const { todoList } = this.state

    return (
      <div className="wrap">
        {/* <button onClick={() => this.addThing()}>添加</button> */}
        <button onClick={() => this.noChange()}>没有变化的setState</button>
        {/* 省略基础代码 */}
        {
          todoList.map( (item,index) => <TodoItem key={index}  data={item} /> )
        }
      </div>
    )
  }
}

export default TodoList