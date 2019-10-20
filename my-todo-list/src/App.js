// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoList = [
      'Mua bim bim',
      'Đi đá bóng',
      'Đi đổ xăng'
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.todoList.map((item, index) =>  <TodoItem key = {index} title = {item}/>)
        }
      </div>
    );
    }
}

export default App;
