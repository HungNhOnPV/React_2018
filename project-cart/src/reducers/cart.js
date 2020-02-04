import * as types from '../constants/ActionTypes';
import { findIndex } from 'lodash';

let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
    let { product, quantity } = action;

    switch(action.type) {
        case types.ADD_TO_CART: {
            const index = findIndex(state, (item) => {
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
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_PRODUCT_IN_CART: {
            const index = findIndex(state, (item) => {
                return product.id === item.product.id;
            });
            if(index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case types.UPDATE_PRODUCT_IN_CART: {
            const index = findIndex(state, (item) => {
                return product.id === item.product.id;
            });
            if(index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        default: return [...state];
    }
}

export default cart;