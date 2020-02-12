import React, { Component } from "react";

class ProductItem extends Component {
    
    statusClass = () => this.props.product.status ? 'Con hang' : 'Het hang';
    statusName = () => this.props.product.status ? 'warning' : 'default';

    render() {
        const { product, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${this.statusName()}`}>
                        {this.statusClass()}
                    </span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-10">
                        Sua
                    </button>
                    <button type="button" className="btn btn-danger">
                        Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
