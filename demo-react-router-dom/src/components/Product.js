import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { match } = this.props;
        const name = match.params.name;
        return(
            <h2>Chi tiet san pham: {name}</h2>
        );
    }
}

export default Product;