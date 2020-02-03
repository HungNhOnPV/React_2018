import React from "react";
import Product from "./Product";

class Products extends React.Component {
  render() {
    return (
      /* <!-- Products --> */
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* <!-- Product --> */}
          <Product />
        </div>
      </section>
    );
  }
}

export default Products;
