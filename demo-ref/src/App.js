import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <div className="App">
        <input type="text" ref={this.inputElement}></input>
      </div>
    );
  }
}

export default App;
