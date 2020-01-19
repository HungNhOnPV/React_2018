import React, { Component } from 'react';

class Result extends Component {
    setStyle = (color, fontSize) => {
        return {
            color: color,
            fontSize: fontSize + 'px'
        }
    }

    render() {
        const { color, fontSize } = this.props;

        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : { color } - FortSize : { fontSize }px </p>
            <div id="content" 
                style={ this.setStyle(color, fontSize) }
            >
                Noi dung setting
            </div>
          </div>
        );
    }
}

export default Result;