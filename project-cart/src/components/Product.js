import React from "react";

class Product extends React.Component {

  showRating = () => {
    const { product } = this.props;
    let tempt = [];
    for(let i = 1; i <= product.rating; i++) {
      tempt.push(<i className="fa fa-star"></i>);
    };
    for(let i = 1; i <= (5 - product.rating); i++) {
      tempt.push(<i className="fa fa-star-o"></i>);
    };
    return tempt;
  }

  render() {
    const { product } = this.props;
    return (
      /* <!-- Product --> */
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={ product.image }
              className="img-fluid"
              alt={ product.name }
            />
            <a href>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href>{ product.name }</a>
              </strong>
            </h4>
            <ul className="rating">
            <li>
              { this.showRating() }
              </li>
            </ul>
            <p className="card-text">{ product.description }</p>
            <div className="card-footer">
              <span className="left">{ product.price }$</span>
              <span className="right">
                <a
                  href
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
