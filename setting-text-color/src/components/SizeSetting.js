import React, { Component } from 'react';

class SizeSetting extends Component {
    setIncreaseFontSize = () => {
        if(this.props.fontSize > 8)
        this.props.onReceiveFontSize(this.props.fontSize - 2);
    }

    setReductionFontSize = () => {
        if(this.props.fontSize < 36)
        this.props.onReceiveFontSize(this.props.fontSize + 2);
    }

    render() {
        const { fontSize } = this.props;

        return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Size : { fontSize } </h3>
            </div>
            <div className="panel-body">
                <button 
                    type="button" 
                    className="btn btn-success" 
                    onClick={ this.setIncreaseFontSize } 
                    >
                    Increase
                    </button>
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={ this.setReductionFontSize }
                    >
                    Reduction
                    </button>
            </div>
        </div>
        );
    }
}

export default SizeSetting;