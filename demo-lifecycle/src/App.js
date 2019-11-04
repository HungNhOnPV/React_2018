import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  componentDidUpdate() {
    console.log('App update');
  }

  removeCounter() {
    this.setState({
      showCounter: !this.state.showCounter
    });
  }

  render() {
    console.log('App render');
    return (
      <div className="App">
        <button onClick={() => this.removeCounter()}>Remove counter</button>
        { this.state.showCounter && < Counter /> }
      </div>
    );
  }
}

export default App;
