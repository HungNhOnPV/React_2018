import React from "react";
import Product from "./Product";
import { connect } from 'react-redux';

class Products extends React.Component {

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
      /* <!-- Products --> */
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* <!-- Product --> */}
          { this.showProducts(products) }
        </div>
      </section>
    );
  }
}

const mapStateTopProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToPros = (dispatch, props) => {
  return {
    
  }
}

export default connect(mapStateTopProps, mapDispatchToPros)(Products);
