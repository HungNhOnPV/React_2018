import React from "react";

class Message extends React.Component {
  render() {
    const { message } = this.props;
    return (
      /* <!-- Message --> */
      <h3>
        <span className="badge amber darken-2">{message}</span>
      </h3>
    );
  }
}

export default Message;
