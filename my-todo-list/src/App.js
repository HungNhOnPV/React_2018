// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Đi đá bóng', isComplete: true },
      { title: 'Đi đổ xăng', isComplete: false }
    ]}
  }

  onItemClicked(item) {  
    return(event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index +1)
        ]
      });
    };
  }

  render() {
    const { todoItems } = this.state;

    if(todoItems.length) {
      return (
        <div className="App">
          {
            todoItems.length > 0 && todoItems.map((item, index) =>  
              <TodoItem 
              key = {index} 
              item = {item} 
              onClick = {this.onItemClicked(item)} />
            )
          }
        </div>
      );
    } else {
        return(
        <div className="App">Nothing here.</div>
        );
      }
    }
}

export default App;
