import * as types from '../constants/ActionTypes';
import { findIndex } from 'lodash';

// let data = JSON.parse(localStorage.getItem('CART'));
let initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://24hstore.vn/images/products/2019/05/28/large/iphone-7-plus-128gb-cu-98-mau-hong.jpg',
            description: 'Sản phẩm do Apple sản suất',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'Samsung galaxy S7',
            image: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s7-my-den-didongviet_3_1.jpg',
            description: 'Sản phẩm do Samsung sản suất',
            price: 400,
            inventory: 15,
            rating: 3
        },
        quantity: 2
    }
];

const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    switch(action.type) {
        case types.ADD_TO_CART:
            let index = findIndex(state, (item) => {
                return product.id === item.product.id;
            });
            if(index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            return [...state];
        default: return [...state];
    }
}

export default cart;