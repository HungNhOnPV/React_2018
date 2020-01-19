import React, { Component } from 'react';

class FormAddProduct extends Component {

    onAddProduct = () => {
        alert(this.refs.name.value);
    }

    render() {
        return(
            
            <div class="panel panel-danger">
                <div class="panel-heading">
                        <h3 class="panel-title">Add Product</h3>
                </div>
                <div class="panel-body">
                <div class="form-group">
                    <label>Product</label>
                    <input type="text" class="form-control" ref="name" />
                </div>
                <button type="submit" class="btn btn-primary" onClick={ this.onAddProduct }>Submit</button>
                </div>
            </div>  
            
        );
    }
}

export default FormAddProduct;