import React, { Component } from "react";
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';

class ProductsContainer extends Component {

    showProducts = products => {
        let result = null;
        if(products.length > 0) {
          result = products.map((product, index) => {
            return <Product 
                      key ={index}
                      product={product}
                    ></Product>
          });
        }
        return result;
      }

    render() {
        const { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }
}

const mapStateTOProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateTOProps, null)(ProductsContainer);