import React from 'react';

import Header from './components/Header';
import Product from './components/Product';
import FromAddProduct from './components/FormAddProduct';

import Iphone from './images/Iphone-XS-Max.png';

function App() {
    const products = [
        {
            id: 1,
            name: 'Iphone XS Max',
            image: Iphone,
            price: 2000,
            status: true
        },
        {
            id: 2,
            name: 'Iphone XS',
            image: Iphone,
            price: 3000,
            status: true
        },
        {
            id: 3,
            name: 'Samsung galaxy S10',
            image: Iphone,
            price: 2500,
            status: false
        },
        {
            id: 4,
            name: 'Nokia Lumia',
            image: Iphone,
            price: 2100,
            status: true
        },
        {
            id: 5,
            name: 'Oppo F1s',
            image: Iphone,
            price: 1500,
            status: true
        },
        {
            id: 6,
            name: 'B phone 3',
            image: Iphone,
            price: 1000,
            status: true
        }
    ];

    const elements = products.map((product, index) => {
        let result = '';
        if(product.status) {
            result =    <Product
                            key={ product.id }
                            price={ product.price }
                            image={ product.image }
                        >
                            { product.name }
                        </Product>
        }
        return result;
    });

        return(
            <div className="App">
                < Header />
                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <FromAddProduct />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        { elements }
                    </div>
                </div>
            </div>           
            );
}

export default App;
