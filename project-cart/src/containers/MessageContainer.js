import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from "prop-types";
import Message from "../components/Message";

class  MessageContainer extends Component {
    render () {
        const { message } = this.props;
        return(
            <Message message={message}></Message>
        );
    }
}

MessageContainer.propTypes = {
    message: PropsTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps)(MessageContainer);