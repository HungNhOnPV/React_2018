import React from 'react';

import './App.css';

import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends React.Component {
    state = {
        color: 'red',
        fontSize: 12
    }

    onSetColor = params => {
        this.setState({
            color: params
        });
    }

    onSetFontSize = params => {
        this.setState({
            fontSize: params
        });
    }

    onSetReset = value => {
        if(value) {
            this.setState({
                color: 'red',
                fontSize: 12
            });
        }
    }

  render() {
      const { color, fontSize } = this.state;
    return(      
      
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={ color } onReceiveColor={ this.onSetColor } />

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting color={ color } fontSize={ fontSize } onReceiveFontSize={ this.onSetFontSize } />
            <Reset onReceiveReset={ this.onSetReset } />
          </div> 

          <Result color={ color } fontSize={ fontSize } />
        </div>
      </div>
    );
  }
}

export default App;
