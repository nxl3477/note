import React, { Component } from 'react';
import TodoList from './pages/todolist/todolist'
import Sync from './pages/sync/sync'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component={TodoList}/>
            <Route exact path="/sync" component={Sync} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
