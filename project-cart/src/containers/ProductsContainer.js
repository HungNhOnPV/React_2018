import React, { Component } from "react";
import { connect } from 'react-redux';
import Products from '../components/Products';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
            <Products products={products} />
        );
    }
}

const mapStateTOProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateTOProps, null)(ProductsContainer);