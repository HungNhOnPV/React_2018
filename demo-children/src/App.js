import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion';

class App extends Component  {
  render() {
    return (
      <div className="App">
        < Accordion heading="Heading">
          Hung dep trai
        </Accordion>
      </div>
    );
  }
}

export default App;
