import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
    state = {
        isChecked: false
    }

    onClick = isChecked => {
        this.setState({
            isChecked: isChecked
        });
    }

    render() {
        const { isChecked } = this.state;
        return(
            <div>
                Day la trang lien he<br />
                <button 
                    type="button" 
                    className="btn btn-info" 
                    onClick={ () => this.onClick(false) } 
                >
                    Cho phep
                </button>&nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={ () => this.onClick(true) } 
                >
                    Khong cho phep
                </button>
                <Prompt
                    when={isChecked}
                    message={ location => (`Ban chac chan muon di den ${location.pathname}`)}
                />
            </div>
            
        );
    }
}

export default Contact;