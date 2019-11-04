import React, { Component } from 'react';
import './App.css';
import WeeklySongListItem from './components/WeeklySongListItem'

class App extends Component {
  render() {
    return(
      <div className="App">
        <WeeklySongListItem
          order="01"
          title="Em không thể"
          singer="Tiên Tiên, Touliver"
          viewCount={3000}
        />
      </div>
    );
  }
}

export default App;
