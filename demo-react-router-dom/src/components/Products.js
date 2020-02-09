import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import routers from '../routers';

class Products extends Component {

    showProduct = (products, url) => {
        let result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <NavLink to={`${url}/${product.slug}`} key={index}>
                        <li key={index} className="list-group-item">
                            { product.id } - { product.name } - { product.price }
                        </li>
                    </NavLink>
                );
            })
        }
        return result;
    }
    render() {
        let { match, location } = this.props;
        console.log(location);
        let url = match.url;
        let products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'Iphone X',
                price: 35000000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'Samsung galaxy s10',
                price: 30000000
            },
            {
                id: 3,
                slug: 'oppo',
                name: 'Oppo f1s',
                price: 1000000
            }
        ]
        return(
            <div className="container">
                <h1>Danh sach san pham</h1>
                <div className="row">
                    <ul className="list-group">
                        { this.showProduct(products, url)}
                    </ul>
                </div>
                <div className="row">
                    <Route path={routers[3].path} component={routers[3].main} />
                </div>
            </div>
            

            
            
            
        );
    }
}

export default Products;