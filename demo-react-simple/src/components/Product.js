import React, { Component } from 'react';

class Product extends Component {
    clickAddToCart = () => {
        alert(this.props.children);
    }

    render() {
        return(
            
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img src={ this.props.image } alt={ this.props.children } />
                    <div className="caption">
                        <h3>{ this.props.children }</h3>
                        <p>
                            { this.props.price } $
                        </p>
                        <button type="button" className="btn btn-primary" onClick={ this.clickAddToCart }>Add Cart</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Product;
