import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

    state = {
        id: '',
        txtName: '',
        txtPrice: '',
        chkbStatus: ''
    }

    onChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = event => {
        event.preventDefault();
        let { txtName, txtPrice, chkbStatus } = this.state;
        const { history } = this.props;
        callApi('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            history.goBack();
        });;
    }

    render() {
        let { txtName, txtPrice, chkbStatus } = this.state;
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label htmlFor="name">Ten san pham:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="txtName" 
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gia">Gia:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="gia" name="txtPrice" 
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trang thai:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox" 
                                value="" 
                                name="chkbStatus" 
                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                value={chkbStatus}
                                onChange={this.onChange}
                            />
                            Con hang
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">Luu lai</button>
                    <Link to="/product-list" className="btn btn-danger">Tro lai</Link>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
