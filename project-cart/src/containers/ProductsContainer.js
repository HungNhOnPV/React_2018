import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropsTypes from "prop-types";
import * as actions from '../actions/index';

class ProductsContainer extends Component {
  showProducts = products => {
    let { onAddToCart } = this.props;
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product 
                  key={index} 
                  product={product} 
                  onAddToCart={onAddToCart}
                ></Product>;
      });
    }
    return result;
  };

  render() {
    const { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      name: PropsTypes.string.isRequired,
      image: PropsTypes.string.isRequired,
      description: PropsTypes.string.isRequired,
      price: PropsTypes.number.isRequired,
      inventory: PropsTypes.number.isRequired,
      rating: PropsTypes.number.isRequired
    })
  ).isRequired
};

const mapStateTOProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actions.actAddToCart(product, 1));
    }
  }
}

export default connect(mapStateTOProps, mapDispatchToProps)(ProductsContainer);
