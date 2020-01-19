import React, { Component } from 'react';

class ColorPicker extends Component {

    state = {
        colors: ['red', 'green', 'violet', 'silver']
    };

    setActiveColor = color => {
        this.props.onReceiveColor(color);
    }

    elmColor = () => this.state.colors.map((color, index) => {
        return <span 
            key={ index } 
            style={{background: `${color}`}}
            className={ this.props.color === color ? 'active' : ''}
            onClick={ () => this.setActiveColor(color) }
            >

            </span>
    });

    render() {
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Color Picker</h3>
              </div>
              <div className="panel-body">
                    { this.elmColor() }
              </div>
            </div>
          </div>
        );
    }
}

export default ColorPicker;