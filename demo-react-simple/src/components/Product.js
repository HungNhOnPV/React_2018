import React, { Component } from 'react';

class Product extends Component {
    render() {
        return(
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src="https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png" alt="Iphone XS Max" />
                    <div className="caption">
                        <h3>Iphone XS Max</h3>
                        <p>
                            1.500 $
                        </p>
                        <button type="button" className="btn btn-default">Add Cart</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Product;
