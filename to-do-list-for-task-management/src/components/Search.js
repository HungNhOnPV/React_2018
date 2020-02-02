import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/Index';

class Search extends Component {
    state = {
        keyword: ''
    };

    onChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearchTable(this.state.keyword);
    }

    render() {
        const { keyword } = this.state;

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input
                            name="keyword"
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khóa..."
                            value={ keyword }
                            onChange={ this.onChange }
                        />
                        <span className="input-group-btn">
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={ this.onSearch }
                            >
                                <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                        </span>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchTable: keyword => {
            dispatch(actions.searchTable(keyword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);