import React, { Component } from 'react';

class Reset extends Component {

    setReset = () => {
        this.props.onReceiveReset(true);
    }

    render() {
        return(
            <button type="button" className="btn btn-primary" onClick={ this.setReset }>Reset</button>
        );
    }
}

export default Reset;