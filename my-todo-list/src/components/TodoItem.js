import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div class = "TodoItem">
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default TodoItem;