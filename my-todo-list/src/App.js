// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoList = [
      // { title: 'Mua bim bim', isComplete: true },
      // { title: 'Đi đá bóng', isComplete: true },
      // { title: 'Đi đổ xăng', isComplete: false }
    ];
  }

  render() {
    return (
      <div className="App">
        {
          this.todoList.length > 0 && this.todoList.map((item, index) =>  
            <TodoItem key = {index} item = {item}/>
          )
        }
        {
          this.todoList.length === 0 && 'Nothing here.'
        }
      </div>
    );
    }
}

export default App;
